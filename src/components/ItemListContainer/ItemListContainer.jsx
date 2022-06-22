import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'
import ItemList from '../itemlist/itemlist'
import Spinner from '../spinner/spinner'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    useEffect(() => {
        getFetch(6)
        .then((resp)=>{
            setProds(resp)
        })
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

