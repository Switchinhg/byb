import './cart.css'
import { useCartContext } from "../contexto/CartContext"
import { VscRemove,VscAdd } from "react-icons/vsc";


const Cart = () => {
    const { cart, modificarCarrito,borrarProd,total} = useCartContext()

  return (
    <>
      <div className="contenedor">
      <h1>Carrito</h1>

    <ul>
        {cart.map(el => (  <li key={el.id}>
          <div>
            <img src={el.img} alt="" />
          </div>
            nombre: {el.prodName} <br />
            cantidad: {el.cantidad} {`  `}  
            precio: {el.precio}
            <br />
            <button onClick={()=>modificarCarrito(el.id,'plus')} className="remove boton">
            <VscAdd />
            </button>
            <button onClick={()=>modificarCarrito(el.id,'minus')} className="remove boton">
            <VscRemove />
            </button>
            <button onClick={()=>borrarProd(el.id)} className="remtodo boton">
            Borrar
            </button>
          </li>
          
          ))} 
    </ul>

    <div className="total">
      Total: {total()}
    </div>
          </div>

    </>
  )
}

export default Cart