
import Item from '../item/item'
import './itemlist.css'

const ItemList = ({prods,donde})=> {
    return(
    <>
        {prods.map((prod) =>(
            <Item key={prod.id} donde={donde} prod={prod}/>
            ))}
    </>
    )
}

export default ItemList