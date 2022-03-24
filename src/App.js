import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PathNotFound from './components/PathNotFound';
import About from './pages/About';
import AuthWrapper from './pages/AuthWrapper';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <div className="app">
      <AuthWrapper>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='products' element={<Products path={['home', '/products']} />} >
            </Route>
            <Route path='products/:Id' element={<SingleProduct path={['home', '/products']}/>} />
            <Route path='about' element={<About path={['home', '/about']}/>} />
            <Route path='cart' element={<Cart path={['home', '/cart']} />} />
            <Route path='checkout' element={<Checkout path={['home', '/checkout']} />} />
            <Route path='*' element={<PathNotFound />} />
          </Route>
        </Routes>
      </AuthWrapper>
    </div>
  );
}

export default App;
