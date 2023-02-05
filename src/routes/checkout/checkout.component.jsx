import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map((cartItem) => (
        <div>
          <h1>{cartItem.name}</h1>
          <button> {`<`}</button> <span>{cartItem.quantity}</span>{' '}
          <button> {`>`}</button> <button>X</button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
