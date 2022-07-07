import React from 'react'
import './compra.css'
 import { UsarContextoUsuario } from '../contexto/userContext';

const CompraConcretada = () => {
  const { usuario } = UsarContextoUsuario()
  return (
    <div className='centrar columna'>
        <img src={'https://memegenerator.net/img/instances/84078707.jpg'} alt="" />
        <p>gracias {usuario.nombre} por la compra!</p>
    </div>
  )
}

export default CompraConcretada