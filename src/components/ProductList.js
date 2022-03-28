import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

function ProductList({name, price, image, id, description}) {

    return (
    <div className='productList'>
        <img src={image} className='productList__img' alt='img'/>
        <div className='productList__content'>
            <h3 className='productList__content__name'>
                {name}
            </h3>
            <p className='productList__content__price'>
                {formatPrice(price)}
            </p>
            <p className='productList__content__description'>
                {description}
            </p>
            <Link to={`/products/${id}`}>
                <button className='productList__content__btn btn'>
                    details
                </button>
            </Link> 
        </div>
    </div>
    )
}

export default ProductList;