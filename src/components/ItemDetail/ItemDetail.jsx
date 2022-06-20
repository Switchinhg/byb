import { useState } from 'react'
import AgregarCarrito from '../AgregarCarrito/AgregarCarrito'
import ItemCount from '../itemCount/itemCount'
import './ItemDetail.css'

export const ItemDetail = ({producto}) => {
    const [inputType, setInputTipe] = useState('button')

    const onAdd=(cant) =>{
        console.log(cant)
        alert("agregado al carrito " + cant + " " + producto.prodName)
        setInputTipe('input')
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
