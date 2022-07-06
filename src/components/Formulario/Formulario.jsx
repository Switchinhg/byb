import React, { useState } from 'react'
import { UsarContextoUsuario } from '../contexto/userContext'

const Formulario = ({Cerrado}) => {
    const { agregarUsuario } = UsarContextoUsuario()
    const [errores,ponerError] = useState('')
    const [datos, ponerDatos] = useState({
        nombre: '',
        email: '',
        apellido: '',
        direccion: '',
        cel: '',
        nomEnTarjeta: '',
        numEnTarjeta: '',
        ccv: '',
    })
    const abecedario = 'abcdefghijklmnopqrstuvwxyz'.split('') 
    const { nombre, email, direccion,nomEnTarjeta, numEnTarjeta,ccv } = datos
    const fijarseLetras = e => {
        abecedario.forEach(letra => 
            letra === e.key.toLowerCase() ? e.preventDefault():null
        );
    }
    /* con cada cambio que se guarde en el  array objeto*/
    const enCambio = e => {
        ponerDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
        console.log(datos)
    }
    const manejarEnvio = e => {

        e.preventDefault()
        //validar que los campos no esten vacios
        if (nombre.trim() === '' || email.trim() === '' || direccion.trim() === '' || nomEnTarjeta.trim() === '' || numEnTarjeta.trim() === '' || ccv.trim() === '') {
            ponerDatos({
                ...datos,

            })
            ponerError("Algunos campos son obligatorios")
            return
        }
        //poner 16 numeros en cedula
        if(numEnTarjeta.length !== 16){
            ponerError("La tarjeta debe de ser de 16 digitos")
        return
        }
            //enviar al contexto los datos del usuario
            agregarUsuario(datos)
            // Cerrar Modal
            Cerrado()
        
    }


    return (
        <form onSubmit={manejarEnvio} className='modalUsuario'>
            <p>Información de contacto &#128512;</p> 
            <div>
                <input type="text" name="nombre" id="nombre" placeholder='* Nombre' onChange={enCambio} />
                <input type="text" name="apellido" id="apellido" placeholder='Apellido (opcional)' onChange={enCambio}/>
            </div>

            <input type="email" name="email" id="email" placeholder='* Email'  onChange={enCambio}/>
            <input type="text" name="direccion" id="direccion" placeholder='* Direccion'  onChange={enCambio}/>
            <input type="number" name="cel" id="cel" placeholder='Celular (opcional)'onKeyDown={fijarseLetras} onChange={enCambio}/>

            <p>Información de pago</p>

            <input type="text" name="nomEnTarjeta" id="nomEnTarjeta" placeholder='* Nombre en la tarjeta'  onChange={enCambio}/>
            <div>
                <input type="number" name="numEnTarjeta" id="numEnTarjeta" placeholder='* Numero de Tarjeta' onKeyDown={fijarseLetras}  onChange={enCambio}/>
                <input type="number" name="ccv" id="ccv" placeholder='* CCV' onKeyDown={fijarseLetras} onChange={enCambio}/>
            </div>
            <p className='error'>{errores}</p>
            <div className='centrar'>
                
                <input type="submit" className='boton'  value={'Terminar Compra'}/>
            </div>
        </form>
    )   
}

export default Formulario