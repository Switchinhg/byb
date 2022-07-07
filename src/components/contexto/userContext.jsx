import React, { createContext, useContext } from 'react'
import { useState } from 'react'

const ContextoUsuario = createContext([])
export const UsarContextoUsuario = () => useContext(ContextoUsuario)

export const UserContextProvider = ({children}) => {
    const [usuario, ponerUsuario] = useState([])

    const agregarUsuario = (usuario) =>{
        ponerUsuario(usuario) 
        console.log("usuario de userCOntext")
        console.log(usuario)
    } 
    return (
    <ContextoUsuario.Provider 
        value={{
            usuario,
            agregarUsuario

        }}
    >
        {children}

    </ContextoUsuario.Provider>
    )
}
