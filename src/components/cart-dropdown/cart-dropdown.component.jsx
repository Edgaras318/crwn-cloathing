import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CardDropdown = () => {
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  const routeToCheckout = () => navigate('/checkout');

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            cartItem={item}
          />
        ))}
      </div>
      <Button onClick={routeToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
