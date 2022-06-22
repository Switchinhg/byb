import './cart.css'
import { useCartContext } from "../contexto/CartContext"
import { VscRemove } from "react-icons/vsc";


const Cart = () => {
    const { cart, removeFromCart } = useCartContext()

  
  return (
    <ul>
      <h1>Carrito</h1>
        {cart.map(el => (  <li key={el.id}>
          <div>
            <img src={el.img} alt="" />
          </div>
            nombre: {el.prodName} <br />
            cantidad: {el.cantidad}
            <br />
            <button onClick={()=>removeFromCart(el.id)} className="remove">
            <VscRemove />
            </button>
          </li>
          
          ))} 
    </ul>
  )
}

export default Cart