import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../universalComponents/CartItem';

function Cart( ) {
  const cartItems = useSelector(state => state.cart.cart.items)

  return (
    <div>
      <h1>Cart</h1>
      <p>This is the Cart page!</p>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
