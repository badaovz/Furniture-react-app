import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AmountButton } from '../components';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';

function CartItem({
    id,
    color,
    colors,
    amount,
    image,
    name,
    price,
    isColorsOpen,
}) {
    const {
        removeCartItem,
        toggleAmount,
        openCartItemColors,
        changeColorCartItem,
    } = useCartContext();

    return (
        <div className='cartItem'>
            <div className='cartItem__info'>
                <img src={image} className='cartItem__info__img' alt='img' />
                <div className='cartItem__info__content'>
                    <h3 className='cartItem__info__content__name'>
                    <Link to={`/products/${id}`}>
                        {name}
                    </Link>
                    </h3>
                    <div className='cartItem__info__content__color'>
                        <p>
                            Color:{' '}
                            <span
                                style={{ backgroundColor: `${color}` }}
                                onClick={() => {
                                    openCartItemColors(id);
                                }}
                            ></span>
                        </p>
                        <ul
                            className={`cartItem__info__content__color__changeBox ${isColorsOpen ? 'active' : ''}` }
                        >
                            {colors.map((c) => (
                                <li
                                    style={{ backgroundColor: `${c}` }}
                                    key={c}
                                    onClick={() => changeColorCartItem(id, c)}
                                ></li>
                            ))}
                        </ul>
                    </div>
                    <p className='cartItem__info__content__price'>
                        {formatPrice(price)}
                    </p>
                </div>
            </div>
            <p className='cartItem__price hide'>{formatPrice(price)}</p>
            <AmountButton
                amount={amount}
                increase={() => toggleAmount(id, 'inc')}
                decrease={() => toggleAmount(id, 'dec')}
            />
            <p className='cartItem__subtotal hide'>
                {formatPrice(price * amount)}
            </p>
            <button
                className='cartItem__remove'
                onClick={() => removeCartItem(id)}
            >
                <FaTrash />
            </button>
        </div>
    );
}

export default CartItem;
