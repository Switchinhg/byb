import React from 'react'
import {Link} from 'react-router-dom'

const AgregarCarrito = () => {
  return (
    <>
    <Link to='/cart'>
        <button className='boton'>Ir al Carrito</button>
    </Link>
    <Link to='/catalogo'>
        <button className='boton'>Seguir Comprando</button>
    </Link>
    </>
  )
}

export default AgregarCarrito