import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponents } from './components/NavbarComponents';
import { FooterComponents } from './components/FooterComponents';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from  './Routes/About';
import { Delivery } from './Routes/Delivery';
import { Restaurante } from './Routes/Restaurante';
import { Contact } from './Routes/Contact';
import { Home } from './Routes/Home';
import { Login } from './Routes/Login';
import { Product } from './Routes/Product';
import { ProductDetail } from './Routes/ProductDetail';

function App() {

    return (
      <>
       <NavbarComponents />
       <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/delivery' element={<Delivery />} ></Route>
        <Route path='/restaurante' element={<Restaurante />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/products' element={<Product />} ></Route>
        {/* <Route path='/products/:productName' element={ProductDetail />} ></Route> */}
        <Route path='/' element={<Navigate to={'/'} />} ></Route>
       </Routes>
       <FooterComponents />
      </>
    )
  }

export default App
