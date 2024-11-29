import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
  

  return (
    <div className='bg-[#f7f3f384]'>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      ></Toaster>
      {/* navbar */}
      <div className='h-[62px]'>
      <Navbar></Navbar>
      </div>
      {/* dynamic layout */}
      <div className='min-h-[calc(100vh-386px)] py-5 '>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;