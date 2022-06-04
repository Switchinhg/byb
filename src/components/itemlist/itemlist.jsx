import {useState,useEffect} from 'react'
import { getFetch } from '../helpers/getFetch'
import Item from '../item/item'
import Spinner from '../spinner/spinner'
import './itemlist.css'

const ItemList = ()=> {
    const[prods,setProds] = useState([])
    let[load,setLoading] = useState(true)
    
    useEffect(() => {
        getFetch()
        .then((resp)=>{
            setProds(resp)
        })
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    
    console.log(prods)

    return(
    <>
        {load?
        <Spinner />
        :
        prods.map(prod =>
            <Item key={prod.id} prod={prod}/>
            )
        
        
        }
    </>
    )
}

export default ItemList