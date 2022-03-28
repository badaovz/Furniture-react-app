import {
  Sort, 
  Filters, 
  Product, 
  RoutePage, 
  ProductList,
} from '../components';
import {useFilterContext} from '../context/filter_context';

function Products({path}) {
  const {filtered_products, grid_view} = useFilterContext();

  console.log('all_products: ', filtered_products);

  return (
    <div>
      <RoutePage path={path}/>
      <section>
        <div className='products'>
          <div className='products__filters'>
            <Filters />
          </div>
          <div className='products__container'>
            <Sort />
            {
              filtered_products.length < 1 ?
              <div className='products__container__notify'>
                <h3>Sorry, no products matched your search.</h3>
              </div> :
              <div className={`products__container__content ${grid_view ? '' : 'list'}`}>
                {
                  filtered_products.map(product => (
                    grid_view ? 
                    <Product {...product} key={product.id} /> :
                    <ProductList {...product} key={product.id}/>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products;