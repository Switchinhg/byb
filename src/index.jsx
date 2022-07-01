import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import NotFound from './components/404/NotFound';
import Cart from './components/cart/cart';
import Catalogo from './components/Catalogo/Catalogo';
import Contacto from './components/contacto/Contacto';
import { CartContextProvider } from './components/contexto/CartContext';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { getFirestoreApp } from './firebase/config';
import './index.css';
import reportWebVitals from './reportWebVitals';


/* firestore */
getFirestoreApp()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer/>} />
          {/* Buscar por categoria */}
          <Route path='catalogo/categoria/:categoriaID' element={<Catalogo/>} />
          {/* mostrar producto especifico */}
          <Route path='/detalle/:ID' element={<ItemDetailContainer/>} />

          {/* Catalogo */}
          <Route path='/catalogo' element={<Catalogo/>} />
          {/* Carrito */}
          <Route path='/cart' element={<Cart/>} />
          {/* Contacto */}
          <Route path='/contacto' element={<Contacto />} />


          {/* no encontrado */}
          <Route path='/404' element={<NotFound/>} />

          {/* Si no encuentra ruta, manda a no encontrado */}
          <Route path='*' element={<Navigate to='/404' />}/>

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
