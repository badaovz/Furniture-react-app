import { Link } from 'react-router-dom';
import { CartItem, RoutePage, EmptyCart, CartColumns, CartBill } from '../components';
import { useCartContext } from '../context/cart_context';

function Cart({path}) {
    const {total_items, cart, clearCart} = useCartContext();

    console.log(cart)
    if(total_items < 1) {
        return (
           <EmptyCart />
        )
    }

    return (
        <div className='cart'>
            <RoutePage path={path} />
            <CartColumns />
            <hr />
            <div className='cart__items'>
                {
                    cart.map(cartItem => (
                        <CartItem {...cartItem} key={cartItem.id}/>
                    ))
                }
            </div>
            <hr />
            <div className='cart__control'>
                <Link to='/products' className='cart__control__continueShopping btn'>
                    continue shopping
                </Link>
                <button 
                    className='cart__control__clearCart btn'
                    onClick={clearCart}
                >
                    clear shopping cart
                </button>
            </div>

            <CartBill />
        </div>
    )
}

export default Cart;