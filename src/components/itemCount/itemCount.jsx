import './itemCount.css'
import  {useState} from 'react'


function ItemCount ({stock,initial}){
    const [productos, setNumProds] = useState(initial)

    function sumarProd(){
        if(productos !== stock && stock !== 0 ){
            setNumProds(productos+1)
        }
    }
    function restarProd(){
        if(productos!==1){

            setNumProds(productos-1)
        }
    }

    return (
        <>
            <p className='contador'>{productos}</p>
            <div className="separar">
            <button onClick={sumarProd}  className="boton">+</button>
            <button onClick={restarProd} className="boton">--</button>
            </div>
            <button className='boton agregar'>Agregar</button>
        </>
    )
}


export default ItemCount