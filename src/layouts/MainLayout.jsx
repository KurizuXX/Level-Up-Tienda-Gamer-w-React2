import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout(){
  return (
    <>
      <Navbar/>
      <main className="container" style={{paddingTop:'90px'}}>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}