import React from 'react'
import { NavLink } from 'react-router-dom'

/* Usado en el boton de Admin */
export function VerBoton ({condition = false}) {
  return (
    <>  
        {condition && <NavLink to='/admin'  className={({ isActive })=> isActive ?  'selected': 'deselected'}>Admin</NavLink>}
    </>
  )
}


/* Usado en componente Logueado <Logueado> </Logueado> */
export function Logueado ({condition = false, children}) {
    
  const token = localStorage.getItem('token')
  if(!token) {
    return <h2>No Loggie bro</h2>
  }

  return (
    <>  
      {children}
    </>
  )
}
