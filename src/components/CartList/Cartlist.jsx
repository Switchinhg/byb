import React from 'react'
import { useCartContext } from "../contexto/CartContext"
import { VscRemove,VscAdd } from "react-icons/vsc";


const Cartlist = () => {
    const { cart, modificarCarrito,borrarProd} = useCartContext()
    return (
        cart.map(el => (  
            
            <div key={el.id} className="carritProd">
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
            </div>
            ))
    )
}

export default Cartlist