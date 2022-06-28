import './cart.css'
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from '../contexto/CartContext'



export default function CartWidget() {
    
    const { totalProds } = useCartContext()   //usamos el contexto
    console.log(totalProds)
    return(
        <div className="cart">
            <FaShoppingCart />
            {
                totalProds()>0?
                    <div className='carritoTamaño'>
                        <p className={totalProds()<10? '': 'mayor10'}>{totalProds()}</p>
                    </div>
                    :
                    /* para que no se meuva todo el navbar cuando se agrega al carrito */
                    <div className='carritoTamaño'></div>
            }
        </div>
    )
}