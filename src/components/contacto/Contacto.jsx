import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './contacto.css'

const MySwal = withReactContent(Swal)


const Contacto = () => {
  const [estado, setEstado] = useForm("xjvlngak")
  if(estado.succeeded){
    MySwal.fire({
      html: <i>Estaremos en contacto Pronto!</i>,
      icon: 'success'
    })
    return <div className='prodNoEncontrado'><img src={'./img/mailenviado.svg'} alt="" /></div>
  }
  return (
    <form onSubmit={setEstado} className='contenedor contacto'>
      <input type="text" placeholder='Nombre' name="nombre" id="nombre" required/>
      <input type="email" placeholder='alguien@direccion.com'name="email" id="email" required/>
      <input type="text" placeholder='Asunto' name="asunto" id="asunto" />
      <textarea name="mensaje" id="mensaje" cols="30" rows="10" required></textarea>
      <input type="submit" className='boton' value={'Enviar'} name="" id="" />
    </form>
  )
}

export default Contacto