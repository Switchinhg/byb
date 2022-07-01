import './cart.css'
import { useCartContext } from "../contexto/CartContext"
import { VscRemove,VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
    const { cart, modificarCarrito,borrarProd,total,totalProds,borrarCarrito} = useCartContext()
    const MsgCorrecto = withReactContent(Swal)
    const db = getFirestore()
    const ordenCollection = collection(db,'ordenes')

    async function crearOrden(e){
      // e.preventDefault()
      let orden = {
                    usuario:{nombre:'Santiago',email:'santifonlop@hotmail.com',telefono:'094680478'},
                    total: total(),
                    /* Pongo todo el obj producto en la orden para mostrar todo el producto en la orden */
                    items: {...cart}
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
      // borrarCarrito()
      )
      .catch(err=>console.log(err))
      
    }
    
  return (
    <>
      <div className="contenedor">
      <h1>Carrito</h1>

    <ul className='carritoProds'>
    { totalProds()> 0 ? 
        cart.map(el => (  <li key={el.id} className="carritProd">
          <div className='imgprod'>
            <img className='imgProd' src={el.img} alt="" />
          </div>
          <div className="infoCarritoProd">
            nombre: {el.prodName} <br />
            precio: {el.precio}
            </div>
            <div className="botonProd">
            <p> Cantidad: {el.cantidad} {`  `}  </p>
              <div className='botonAgregar'>
            <button onClick={()=>modificarCarrito(el.id,'plus')} className="remove boton"><VscAdd /></button>
            <button onClick={()=>modificarCarrito(el.id,'minus')} className="remove boton"><VscRemove /></button>
              </div>
            <button onClick={()=>borrarProd(el.id)} className="remtodo boton">Borrar</button>
            </div>
          </li>
          ))
          
        :
        <div>
        <p>No hay productos en el carrito</p>
        <Link to='/catalogo'>
        <button className='boton'>Ir a catalogo</button>
        </Link>
        </div>
        } 
    <div className="total">
      {total()>0? <p > Total <span className='pesos'> ${total() }</span></p>: null}
      {totalProds()>0? 
      <div>
        <button onClick={()=>borrarCarrito()} className='boton'>Vaciar Carrito</button>

      <button onClick={()=>{
        crearOrden()
      }} className='boton'>Realizar Compra</button>
      </div>
    
         : null
        }
      
    </div>
    </ul>
  
          </div>

    </>
  )
}

export default Cart