import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Error, Loading, ProductImagePreview, RoutePage, ProductInfo } from '../components';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';


function SingleProduct({path}) {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const {
        fetchSingleProduct, 
        single_product_error : error, single_product, 
        single_product_loading: loading
    } = useProductsContext(); 
    
    const { name } = single_product;

    let newPath = [...path, `/${name}`]

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`);
           
    }, [id, fetchSingleProduct]);

    useEffect(() => {
        if(error) {
            setTimeout(()=>{
                return navigate('/');
            }, 3000)
        }
    }, [error, navigate]);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    return (
    <div className='singleProduct'>
        <RoutePage path={newPath} />
        <section>
            <Link to='/products' className='singleProduct__backProduct btn'>
                back to products
            </Link>
            <div className='singleProduct__container'>
                <ProductImagePreview />
                <ProductInfo />
            </div>
        </section>
    </div>
    )
}

export default SingleProduct;