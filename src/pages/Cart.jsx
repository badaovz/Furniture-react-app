import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import RoutePage from '../components/RoutePage';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import { useUserContext } from '../context/user_context';

function Cart({path}) {
    const {total_items, cart, total_amount, shipping_fee, clearCart} = useCartContext();
    const {myUser, loginWithRedirect} = useUserContext();

    console.log(cart)
    if(total_items === 0) {
        return (
            <div className='emptyCart'>
                <h3 className='emptyCart__title'>
                    Your cart is empty
                </h3>
                <Link to='/products'>
                    <button className='emptyCart__btn btn'>
                        fill it
                    </button>
                </Link>
            </div>
        )
    }

    return (
    <div className='cart'>
        <RoutePage path={path} />
        <div className='cart__title'>
            <p className='cart__title__item'>Item</p>
            <p className='cart__title__item hide'>Price</p>
            <p className='cart__title__item'>Quantity</p>
            <p className='cart__title__item hide'>Subtotal</p>
            <span></span>
        </div>
        <hr />
        <div className='cart__item'>
            {
                cart.map(cartItem => (
                    <CartItem {...cartItem} key={cartItem.id}/>
                ))
            }
        </div>
        <hr />
        <div className='cart__control'>
            <Link to='/products'>
                <button className='cart__control__continueShopping btn'>
                    continue shopping
                </button>
            </Link>
            <button 
                className='cart__control__clearCart btn'
                onClick={clearCart}
            >
                clear shopping cart
            </button>
        </div>

        <section className='cart__bill'>
            <div className='cart__bill__container'>
                <div className='cart__bill__container__content'>
                    <h5 className='cart__bill__container__content__subtotal'>
                        <span>Subtotal:</span> <span>{formatPrice(total_amount)}</span>
                    </h5>
                    <p className='cart__bill__container__content__ship'>
                        <span>Shipping Free:</span> <span>{formatPrice(shipping_fee)}</span>
                    </p>
                    <hr />
                    <h2 className='cart__bill__container__content__orderTotal'>
                        <span>Order Total:</span> <span>{formatPrice(total_amount + shipping_fee)}</span>
                    </h2>
                </div>
                {
                    myUser ? 
                    <Link to='/checkout'>
                        <button className='cart__bill__container__btn btn'>
                            payment
                        </button>
                    </Link> :
                    <button 
                        className='cart__bill__container__btn btn'
                        onClick={loginWithRedirect}
                    >
                        Login
                    </button>
                }
                
            </div>
        </section>
    </div>
    )
}

export default Cart