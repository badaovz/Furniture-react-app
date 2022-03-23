import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {UserProvider} from './context/user_context';
import {ProductsProvider} from './context/products_context';
import {FilterProvider} from './context/filter_context';
import {CartProvider} from './context/cart_context';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-l3swv25f.us.auth0.com'
      clientId='QxLx3tCZqUemGgUp7cnLe6fexaAPgmCW'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <Router>
        <UserProvider>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
              <App />
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
