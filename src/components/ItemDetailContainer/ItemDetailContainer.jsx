import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Spinner from '../spinner/spinner'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    /* Hooks */ 
    const [producto, setProducto] = useState({})
    let [load,setLoading] = useState(true)
    const {ID} = useParams()
    
    useEffect(() => {
        /* primer parametro null para que no traiga todo el array, solo el id */
        getFetch(null,ID)
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
