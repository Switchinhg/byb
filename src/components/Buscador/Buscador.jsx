import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ItemList from '../itemlist/itemlist';
import ProdNotFound from '../ProdNotFound/ProdNotFound'
import Spinner from '../spinner/spinner';
const Buscador = () => {
    const location = useLocation();
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    
    const db = getFirestore()
    const queryCollection =  collection(db,'productos')

    useEffect(() => {
      setLoading(true)

    getDocs(queryCollection)
      .then(resp => setProds(resp.docs.map(item=>({id:item.id, ...item.data() } ) ) ) )
      .finally(()=>setLoading(false))
    }, [])
            const filt = prods.filter(item => item.prodName.toLowerCase().split(" ").includes(location.state.toLowerCase()))
  return (
    <div className='contenedor'>
    {filt.length>0?    
        load?
        <Spinner />
        :
        <div>
          <p>Resultados para: <b> {location.state}  </b> </p>
          <div className="productos">
          <ItemList prods={filt} /> 
          </div>
        </div>
        :
        <div >
          <ProdNotFound />
        </div>
        
    }
    </div>
  )
}

export default Buscador