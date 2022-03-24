import React from 'react';
import RoutePage from '../components/RoutePage';
import Filters from '../components/Filters';
import Sort from '../components/Sort';
import {useFilterContext} from '../context/filter_context';
import Product from '../components/Product';
import ProductList from '../components/ProductList';

function Products({path}) {
  const {filtered_products, grid_view} = useFilterContext();

  console.log('all_products: ', filtered_products);

  return (
    <div>
      <RoutePage path={path}/>
      <div className='products'>
        <section className='products__filters'>
          <Filters />
        </section>
        <section className='products__container'>
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
        </section>
      </div>
    </div>
  )
}

export default Products