

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Root = () => {
    return (
        <>
          {/* for background color  */}
          <div className='fixed top-0 -z-50 w-full h-full bg-[#0F1724]'> </div>

        <Navbar/>     
          <Outlet/>      
        <Footer/>
        </>
    );
};

export default Root;