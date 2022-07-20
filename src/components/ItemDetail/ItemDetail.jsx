import { useState } from 'react'
import AgregarCarrito from '../AgregarCarrito/AgregarCarrito'
import { useCartContext } from '../contexto/CartContext'
import ItemCount from '../itemCount/itemCount'
import './ItemDetail.css'

export const ItemDetail = ({producto}) => {
    /* para cambiar de boton al hacer clic en comprar */
    const [inputType, setInputTipe] = useState('button')
    const [texto,setTexto] = useState('')
    const [num,setnum] = useState('')
    const [error,setError] = useState("")
    // abecedario array con split


    /* para usar el contexto,usamos la funcion exportada de CartContext 
    en vez de importar dos cosas */
    const { addToCart } = useCartContext()

    const personalizado = pers =>{
        setTexto(pers.target.value.trim())
    }
    const numPersonalizado = pers =>{
        setnum(pers.target.value.trim())
    }
    const onAdd=(cant) =>{
        if(!producto.personalizable){
            /* Al cambiar el input al hacer clic en el boton se cambia a seguir comprando o ir a cart */
            setInputTipe('input')
            /* Crea un nuevo objeto de producto agregandole la cantidad */
            addToCart({...producto, cantidad: cant})
        }
        else{

            
            if(texto && num ){
                /* Al cambiar el input al hacer clic en el boton se cambia a seguir comprando o ir a cart */
                setInputTipe('input')
                /* Crea un nuevo objeto de producto agregandole la cantidad */
                addToCart({...producto, cantidad: cant, nombrePersonalizado:texto,numPersonalizado:num})
                setError("")
            }else{
                setError("Casillas vacias o número incorrecto")
            }
        }
        
        
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
                {inputType==='button'?
                <div className="mover">
                
                    {producto.personalizable?<input type="text" id='tos' placeholder='Nombre' onChange={personalizado} />:null}
                    {producto.personalizable?<input type="number"  id='tos' placeholder='Número' onChange={numPersonalizado} />:null}
                    {producto.personalizable?<p className='error'>{error}</p>:null}
                    
                    <ItemCount stock={producto.stock} personalizable={producto.personalizable} initial={1} onAdd={onAdd}/>
                    
                </div>
                :
                <AgregarCarrito/>}
            </div>
        </div>
    </div>
)
}
