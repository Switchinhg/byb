import './cart.css'
import { useCartContext } from "../contexto/CartContext"

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Cartlist from '../CartList/Cartlist';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Formulario from '../Formulario/Formulario';
import CarritVacio from '../CarritoVacio/CarritVacio';

const Cart = () => {
    const { cart, total,totalProds,borrarCarrito} = useCartContext()
    const [abierto , setAbierto] = useState(false)
    const MsgCorrecto = withReactContent(Swal)
    const db = getFirestore()
    const ordenCollection = collection(db,'ordenes')
    const navigate = useNavigate()    

    async function crearOrden(data){
      let orden = {
                    usuario: data,
                    total: total(),
                    /* Pongo todo el obj producto en la orden para mostrar todo el producto en la orden */
                    items: {...cart},
                    activo:true
                  }
      addDoc(ordenCollection, orden)

      .then(resp=>
      MsgCorrecto.fire({
        title: 'Compra realizada',
        html: `<p>Gracias por comprar ${cart.map(i=>" "+i.cantidad +' '+i.prodName + " ")} </p>
              <div>ID de orden: ${resp.id}</div>`,
        icon: 'success',
        confirmButtonText: 'Continuar'
      }),
      borrarCarrito(),
      navigate('/comprafinalizada')

      )
      .catch(err=>console.log(err))
      
    }
    
  return (
    <>
      <div className="contenedor">
      <h1>Carrito</h1>

    <ul className='carritoProds'>
      { totalProds()> 0 ? 
          <Cartlist />
            
          :
          <CarritVacio />
          } 
      <div className="total">
        {total()>0? <p > Total <span className='pesos'> ${total() }</span></p>: null}
        {totalProds()>0? 
          <div>
            <button onClick={()=>borrarCarrito()} className='boton'>Vaciar Carrito</button>
            <button onClick={()=>{setAbierto(true)}} className='boton' >Realizar Compra</button>
            <Modal abierto={abierto} Cerrado={() => {setAbierto(false)}}>
              <Formulario Cerrado={crearOrden}/>
            </Modal>
          </div>
          : 
          null
          }
      </div>
    </ul>
  
          </div>

    </>
  )
}

export default Cart