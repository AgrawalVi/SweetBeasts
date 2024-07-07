# Testing Checkout Logic

1. Visit the shop link that can be found in [preview-testing-instructions.md](preview-testing-instructions.md)

## Overview of checkout flow

1. User adds a product to their cart
2. User clicks checkout
3. After checkout is completed, the user should be redirected to an order confirmation page (Coming Soon, current is a 404 page)

# Database Logic and Behavior

## Overview of database tables and relationships

### User

- Contains users with official accounts, references orders and addresses associated with the user
- When a new user is created, any guest user with the same email will have their orders and shipping addresses transferred to the new user, and the guest user will be deleted

### Guest User

- Contains users that do not have accounts, but have placed an order with us before. References orders and addresses associated with the guest

### Order

- Contains all the information about an order, including an order number, the user who placed the order (either a guest or user), the email of the user, line items of the order, and the shipping adddress

### Shipping Address

- Contains all information about a shipping address, and is mapped to a user or a guest user and always has an order associated with it.

### OpenCheckoutSession

- Contains a list of open checkout sessions and it contains a list of products that are in the checkout session
- This is used for inventory management and to avoid overselling.
- When a user clicks checkout, a new OpenCheckoutSession is created with the products that are in the cart, and after the checkout is completed, the OpenCheckoutSession is deleted.
- If inventory reaches 0 after a checkout, all open checkout sessions with that product should be deleted and in stripe, pressing checkout should display an error

## User Presses Checkout

1.  Inventory is checked to make sure that the product is available
2.  If no inventory is available, the user is not redirected to the checkout page and an error is displayed
3.  If there is not enough inventory, the items in the stripe checkout page are updated to reflect the quantity that is available

## After Checkout is completed

### User is not logged in, but an account exists with the email used in checkout

1. No guest user should be created
2. The order should be created with the user's email and should reference the user who has placed that order
3. If the shipping address is the same as a shipping address that has been previously used by the user, the order should be created with the same shipping address, and a new one should not be created in the database
4. Example:
   1. User Joe has an account wth email joe@gmail.com
   2. Joe is not currently logged in
   3. Joe places an order to a shipping address of Joe 123 Main Street, New York, NY 10001, which he has used before
   4. The database should create an order with Joe's account and Joe's previous shipping address

### User is not logged in, and no account exists with the email used in checkout

1. A guest user should either be created or an existing guest user should have orders and shipping addresses added to if needed
2. The order should be created with the guest user's email and should reference the guest user who has placed that order
3. If the shipping address is the same as a shipping address that has been previously used by the guest user, the order should be created with the same shipping address, and a new one should not be created in the database. But, if the shipping address is different, a new shipping address should be created and the order should be created with that shipping address

### User is logged in

1. Same as if the user is not logged in but has an account

## Guest User makes an account after making purchases

1. Shipping addresses and orders should be transferred to the account, and the guest user should be deleted

## Testing Instructions

1. Make sure to test all scenarios and how they interact with each other. Try and break the application and think of edge cases that could be tested.
2. Document any issues you find with steps to replicate the issue.
