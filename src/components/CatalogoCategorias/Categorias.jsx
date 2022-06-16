import React from 'react'
import { Link } from 'react-router-dom'

const Categorias = () => {
  return (
    <div>
    <h2>Buscador</h2>
    <Link to='/catalogo'>
        <button className='boton'>Todo</button>
    </Link>
    <Link to='/catalogo/categoria/cama'>
    <button className='boton'>Camas</button>
    </Link>
    <Link to='/catalogo/categoria/collar'>
    <button className='boton'>Collares</button>
    </Link>
</div>
  )
}

export default Categorias