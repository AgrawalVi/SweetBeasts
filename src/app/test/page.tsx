'use client';

import { useShoppingCart } from '@/app/context/shoppingcartcontext';
import { useEffect, useState } from 'react';

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
      id: '1',
      name: 'Test Item',
      price: 10.0,
      quantity: 1,
    };
    addToCart(newItem);
  };

  const handleRemoveItem = (id: string) => {
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