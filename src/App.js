import Navbar from './components/Navbar';
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Sidebar from './components/Sidebar';
import AuthWrapper from './pages/AuthWrapper';
import Layout from './components/Layout';
import PathNotFound from './components/PathNotFound';
import Checkout from './pages/Checkout';

function App() {
  return (
    <AuthWrapper>
      <div className="app">
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
      </div>
    </AuthWrapper>
  );
}

export default App;
