import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero';

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