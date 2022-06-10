import { useEffect, useState } from 'react'
import { getFetch } from '../helpers/getFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Spinner from '../spinner/spinner'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    let[load,setLoading] = useState(true)
    
    useEffect(() => {
        /* Con la variable id elijo que producto se muestra en el Detail (por ahora)*/
        let id =4
        /* primer parametro null para que no traiga todo el array, solo el id */
        getFetch(null,id)
        .then((resp)=>{
            setProducto(resp)
        })
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    return (
        <>
            {load?
            <Spinner />
            :
            <ItemDetail producto={producto}/>
            }
        </>
        
    )
}
