import { useState } from 'react'
import AgregarCarrito from '../AgregarCarrito/AgregarCarrito'
import { useCartContext } from '../contexto/CartContext'
import ItemCount from '../itemCount/itemCount'
import './ItemDetail.css'

export const ItemDetail = ({producto}) => {
    /* para cambiar de boton al hacer clic en comprar */
    const [inputType, setInputTipe] = useState('button')

    /* para usar el contexto,usamos la funcion exportada de CartContext 
    en vez de importar dos cosas */
    const { addToCart } = useCartContext()

    const onAdd=(cant) =>{
        /* Al cambiar el input al hacer clic en el boton se cambia a seguir comprando o ir a cart */
        setInputTipe('input')
        /* Crea un nuevo objeto de producto agregandole la cantidad */
        addToCart({...producto, cantidad: cant})
    }

return (
    <div className="prodInfo">
        <div className="wrapper">
            <div className="tituloimg">
                <h2>{producto.prodName}</h2>
                <img src={producto.img} alt="" />
            </div>
            <div className="info">
                <p>Categoria: {producto.categoria}</p>
                <p>{producto.info}</p>
                <p>${producto.precio}</p>
            </div>
            <div className="counter">
                {
                    inputType==='button'?
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                    :
                    <AgregarCarrito/>

                }
            </div>
        </div>
    </div>
)
}
