import { collection, getDocs, getFirestore, limit, query } from 'firebase/firestore'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ItemList from '../itemlist/itemlist'
import Spinner from '../spinner/spinner'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection =  collection(db,'productos')
        const q = query(queryCollection, limit(6))

        getDocs(q)
        .then(resp => setProds(resp.docs.map(item=>({id:item.id, ...item.data() } ) ) ) )
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    
    return (
        <div className="contenedor">
            <div className="destacados_titulo">
                <h1 className="titulos">Destacados</h1>
            </div>
            <div className="productos">
            {load?
            <Spinner />
            :
            <ItemList prods={prods} />
            }
            </div>
            <div className="vertodos">
                <Link to='/catalogo' >
                <button className='boton'>Ver Todos</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemListContainer

