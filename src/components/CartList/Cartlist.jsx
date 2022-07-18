import React from 'react'
import { useCartContext } from "../contexto/CartContext"
import { VscRemove,VscAdd } from "react-icons/vsc";


const Cartlist = () => {
    const { cart, modificarCarrito,borrarProd} = useCartContext()
    const numRandom = () =>{
        return   Math.floor(Math.random() * 1000000)
    }
    return (
        cart.map(el => (  
            
            <div key={el.id+numRandom()} className="carritProd">
            <div className='imgprod'>
                <img className='imgProd' src={el.img} alt="" />
            </div>
            <div className="infoCarritoProd">
                <p>
                Producto: {el.prodName} 

                </p>
                <p >
                precio: {el.precio} 
                </p>
                {el.personalizable?<p>nombre en collar: {el.nombrePersonalizado}</p>: null}
                {el.personalizable?<p>numero en collar: {el.numPersonalizado}</p>: null}
            </div>
            <div className="botonProd">
                <p> Cantidad: {el.cantidad} {`  `}  </p>
                {el.personalizable? null :
                <div className='botonAgregar'>
                    <button onClick={()=>modificarCarrito(el.id,'plus')} className="remove boton"><VscAdd /></button>
                    <button onClick={()=>modificarCarrito(el.id,'minus')} className="remove boton"><VscRemove /></button>
                </div>
                }
                <button onClick={()=>borrarProd(el.nombrePersonalizado?el.nombrePersonalizado:el.id)} className="remtodo boton">Borrar</button>
            </div>
            </div>
            ))
    )
}

export default Cartlist