import { useState } from 'react'
import { useProductsContext } from '../context/products_context';

function ProductImagePreview() {
    const [indexPreview, setIndexPreview] = useState(0);
    const { single_product } = useProductsContext(); 

    const { images } = single_product;

    return (
    <div className='productImagePreview'>
        <img className='productImagePreview__big' src={images ? images[indexPreview].url : ''} alt='imgBig' />
        <div className='productImagePreview__small'>
            {
                images ? images.map((image, index) => (
                    <img 
                        className={`productImagePreview__small__item ${index === indexPreview ? 'active' : ''}`} 
                        src={image.url} 
                        alt='smallImg' 
                        key={image.id}
                        onClick={() => setIndexPreview(index)}    
                    />
                ))
                : ''
            }
        </div>
    </div>
    )
}

export default ProductImagePreview;