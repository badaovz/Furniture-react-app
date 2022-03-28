import { useParams } from 'react-router-dom';
import { StarsRate, AddToCart } from '../components';
import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../utils/helpers';

function ProductInfo() {
    const {id} = useParams();
    const { single_product } = useProductsContext(); 
    
    const {
        name,
        stock, 
        price, 
        description, 
        company, 
    } = single_product;


    return (
        <div className='productInfo'>
            <h3 className='productInfo__name'>
                {name}
            </h3>
            <StarsRate single_product={single_product}/>
            <h5 className='productInfo__price'>{formatPrice(price)}</h5>
            <p className='productInfo__description'>
                {description}
            </p>
            <div className='productInfo__item'>
                <h5>Available: </h5>
                <p>{stock ? 'In Stock' : 'No Available'}</p>
            </div>
            <div className='productInfo__item'>
                <h5>SKU: </h5> 
                <p>{id}</p>
            </div>
            <div className='productInfo__item'>
                <h5>Brand: </h5>
                <p>{company}</p>
            </div>
            <hr/>
            <AddToCart id={id} />
        </div>
    )
}

export default ProductInfo;