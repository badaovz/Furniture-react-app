import { Link } from 'react-router-dom';
import Product from './Product';
import {useProductsContext} from '../context/products_context';


function FeaturedProduct() {
    const {featured_products} = useProductsContext();

    return (
    <div className='featuredProduct'>
        <section>
        <div className='featuredProduct__title'>
            <h3 className='featuredProduct__title__text'>
            Featured Products
            </h3>
            <div className='featuredProduct__title__underline'></div>
        </div>
        <div className='featuredProduct__products'>
            {
            featured_products.map(product => (
                <Product {...product} key={product.id}/>
            ))

            }
        </div>
        <Link to='/products' className=' featuredProduct__btn btn'>
            All Products
        </Link>
        </section>
    </div>
    )
}

export default FeaturedProduct;