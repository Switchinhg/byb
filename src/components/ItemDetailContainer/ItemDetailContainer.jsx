import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Spinner from '../spinner/spinner'
import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    /* Hooks */ 
    const [producto, setProducto] = useState({})
    let [load,setLoading] = useState(true)
    const {ID} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db,'productos', ID)
        
        getDoc(queryItem)
            .then(resp=>  setProducto({id: resp.id, ...resp.data()}) )
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
