import React, { useEffect, useState } from 'react'
import ItemList from '../itemlist/itemlist'
import Spinner from '../spinner/spinner'
import { useParams } from 'react-router-dom'
import Categorias from '../CatalogoCategorias/Categorias'
import ProdNotFound from '../ProdNotFound/ProdNotFound'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const Catalogo = () => {
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    const { categoriaID } = useParams()

    useEffect(() => {
        setLoading(true)
        
        
        const db = getFirestore()
        const queryCollection =  collection(db,'productos')
        const queryCollectionFilter = query(queryCollection, where("categoria","==",categoriaID?categoriaID:null))
        
        categoriaID ?
        
            getDocs(queryCollectionFilter)
            .then(resp => setProds(resp.docs.map(item=>({id:item.id, ...item.data() } ) ) ) )
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        :
        /* Es undefined */
        getDocs(queryCollection)
            .then(resp => setProds(resp.docs.map(item=>({id:item.id, ...item.data() } ) ) ) )
            .finally(()=>setLoading(false))
}, [categoriaID])
    return (
        <div className="contenedor">
                <div className="destacados_titulo">
                    <h1 className="titulos">Catalogo</h1>
                </div>

                <Categorias/>
                
                <div className="productos">
                {load?
                <Spinner />
                :
                prods.length !== 0?
                
                <ItemList prods={prods} />
                :
                    <ProdNotFound />
                }
                </div>
            </div>
    )
}

export default Catalogo