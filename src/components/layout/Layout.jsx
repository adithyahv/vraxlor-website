import { Outlet } from 'react-router-dom';
import Header from '../ui/common/Header';
import Footer from '../ui/common/Footer';

const Layout = () => {
  return (
    <div className="app-shell">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;


