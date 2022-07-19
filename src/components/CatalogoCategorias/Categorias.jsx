import React from 'react'
import {  NavLink, useParams } from 'react-router-dom'
import './categorias.css'

const Categorias = () => {
  const {categoriaID} = useParams()
  return (
    <div>
    <h2>Categorias</h2>
    <div className='separador'>
    <NavLink to='/catalogo' className={categoriaID === undefined ? 'selected btnCategoria' : 'deselected btnCategoria'}> Todos</NavLink>
    <NavLink to='/catalogo/categoria/cama' className={({ isActive })=> isActive ?  'selected btnCategoria': 'deselected btnCategoria'}> Camas</NavLink>
    <NavLink to='/catalogo/categoria/collar' className={({ isActive })=> isActive ?  'selected btnCategoria': 'deselected btnCategoria'}> Collares</NavLink>
    </div>

</div>
  )
}

export default Categorias