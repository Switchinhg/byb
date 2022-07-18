import './itemCount.css'
import  {useState} from 'react'


function ItemCount ({stock,initial, onAdd, personalizable}){
    const [productos, setNumProds] = useState(initial)

    const onChange = () => {
        onAdd(productos)
    }

    function sumarProd(){
        if(productos < stock){
            setNumProds(productos+1)
        }
    }
    function restarProd(){
        if(productos>initial){

            setNumProds(productos-1)
        }
    }
    

    return (
        <>
        {personalizable?
        null
        :    
            <div className="separar">
            <button onClick={sumarProd}  className="botonChico boton">+</button>
            <p className='contador'>{productos}</p>
            <button onClick={restarProd} className="botonChico boton">-</button>
            </div>
            }
            <button className='boton agregar' onClick={onChange}>Agregar</button>
        </>
    )
}


export default ItemCount