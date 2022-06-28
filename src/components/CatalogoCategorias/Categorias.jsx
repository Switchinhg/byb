import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'


const Categorias = () => {
  const {categoriaID} = useParams()
  return (
    <div>
    <h2>Buscador</h2>
    <NavLink to='/catalogo' className={categoriaID === undefined ? 'selected boton' : 'boton'}> Todos</NavLink>
    <NavLink to='/catalogo/categoria/cama' className={({ isActive })=> isActive ?  'selected boton': 'boton'}> Camas</NavLink>
    <NavLink to='/catalogo/categoria/collar' className={({ isActive })=> isActive ?  'selected boton': 'boton'}> Collares</NavLink>

</div>
  )
}

export default Categorias