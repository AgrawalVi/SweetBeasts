'use client';

import { useShoppingCart } from '@/context/shopping-cart-context';
import { useEffect, useState } from 'react';
import Cart from '@/components/general/cart';

const TestPage = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useShoppingCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log('Cart:', cart);
  }, [cart]);

  const handleAddItem = () => {
    const newItem = {
      id: 5,
      name: 'Test Item',
      price: 10.0,
      quantity: 1,
    };
    addToCart(newItem);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Cart />
      <h1>Shopping Cart Test Page</h1>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleClearCart}>Clear Cart</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
