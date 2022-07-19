import React from 'react'
import { useNavigate } from 'react-router-dom'

const BuscadorContainer = () => {
    const navigate = useNavigate()    
    const sendData = (data) => {
        data.preventDefault()
        
        if(data.target.tos.value){
          navigate('/buscador', {state: data.target.tos.value})
          data.target.reset()
        }
    }
  return (
    <div className="navbar-input">
    <form  onSubmit={sendData}>
        <input type="text" id='tos' placeholder='BUSCAR' />
    </form>
</div>
  )
}

export default BuscadorContainer