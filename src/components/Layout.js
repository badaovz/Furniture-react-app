import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import ChatBot from './ChatBot';

function Layout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ChatBot /> 
      <Outlet >
      </Outlet>
      <Footer />
    </>
  )
}

export default Layout;