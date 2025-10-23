import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Categorias from './pages/Categorias'
import CategoriaDetalle from './pages/CategoriaDetalle'
import Ofertas from './pages/Ofertas'
import Comprar from './pages/Comprar'
import PagoCorrecto from './pages/PagoCorrecto'
import PagoError from './pages/PagoError'
import Blogs from './pages/Blogs'
import BlogDetalle1 from './pages/BlogDetalle1'
import BlogDetalle2 from './pages/BlogDetalle2'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Registro from './pages/Registro'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/productos/:id" element={<DetalleProducto/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/categorias/:id" element={<CategoriaDetalle/>} />
        <Route path="/ofertas" element={<Ofertas/>} />
        <Route path="/comprar" element={<Comprar/>} />
        <Route path="/pago-correcto" element={<PagoCorrecto/>} />
        <Route path="/pago-error" element={<PagoError/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/1" element={<BlogDetalle1/>} />
        <Route path="/blogs/2" element={<BlogDetalle2/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/iniciar-sesion" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}
