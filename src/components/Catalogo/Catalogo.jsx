import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'
import ItemList from '../itemlist/itemlist'
import Spinner from '../spinner/spinner'

import { useParams } from 'react-router-dom'
import Categorias from '../CatalogoCategorias/Categorias'
import ProdNotFound from '../ProdNotFound/ProdNotFound'

const Catalogo = () => {
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    const { categoriaID } = useParams()
    console.log(categoriaID)
    useEffect(() => {
        setLoading(true)
        categoriaID ?
            getFetch()
            .then((resp)=>{
                setProds(resp.filter((p => p.categoria === categoriaID)))
            })
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        :
        /* Es undefined */
            getFetch()
            .then((resp)=>{
                setProds(resp)
            })
            .catch(err => console.log(err))
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