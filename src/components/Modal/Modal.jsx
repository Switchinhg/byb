import React from 'react'
import './modal.css'

export default function Modal({abierto , children , Cerrado}) {
    if(!abierto) return  null
  return (
    <>
    
    <div className="fondo-modal" onClick={ Cerrado}></div>
    <div className='contenido-modal '>
        {children}
    </div>
    </>
  )
}
