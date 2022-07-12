import { collection, getDocs, getFirestore, limit, query } from 'firebase/firestore'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import ItemList from '../itemlist/itemlist'
import Spinner from '../spinner/spinner'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection =  collection(db,'productos')
        const q = query(queryCollection, limit(3))

        getDocs(q)
        .then(resp => setProds(resp.docs.map(item=>({id:item.id, ...item.data() } ) ) ) )
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    
    return (
        <div className="contenedor">
            <Carousel />
            <div className="destacados_titulo">
                <h1 className="titulos">Destacados</h1>
            </div>
            <div className="productos">
            {load?
            <Spinner />
            :
            <ItemList prods={prods} donde='ILC'/>
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

