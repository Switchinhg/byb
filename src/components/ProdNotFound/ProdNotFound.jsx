import React from 'react'
import './prodNoEncontrado.css'
const ProdNotFound = () => {
  return (
    <>
    <div className='prodNoEncontrado'>
      <p className='mover'>Productos no encontrados</p>
      <img src={'./img/noprod.svg'} alt="" />
    </div>
    </>
  )
}

export default ProdNotFound