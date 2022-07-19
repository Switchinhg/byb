import React from 'react'
import { Link } from 'react-router-dom'
import './carritoVacio.css'
const CarritVacio = () => {
  return (
    <div>
        <div className='prodNoEncontrado'>
        <p>No hay productos en el carrito</p>

        <img src={'./img/empty.svg'} alt="" />
        
        <Link to='/catalogo'>
            <button className='boton space'>Ir a catalogo</button>
        </Link>
        </div>
    </div>
  )
}

export default CarritVacio