import { Route, Routes } from 'react-router-dom';
import { Layout, PathNotFound } from './components';
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Home,
  Products,
  SingleProduct,
  } from './pages';

function App() {
  return (
    <AuthWrapper>
        <Routes>
          <Route path='/' element={<Layout />} >
    {/* <div className="app"> */}
            <Route index element={<Home />} />
            <Route path='products' element={<Products path={['home', '/products']} />} />
            <Route path='products/:id' element={<SingleProduct path={['home', '/products']}/>} />
            <Route path='about' element={<About path={['home', '/about']}/>} />
            <Route path='cart' element={<Cart path={['home', '/cart']} />} />
            <Route path='checkout' element={<Checkout path={['home', '/checkout']} />} />
            <Route path='*' element={<PathNotFound />} />
    {/* </div> */}
          </Route>
        </Routes>
      </AuthWrapper>
  );
}

export default App;
