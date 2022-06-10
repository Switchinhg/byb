
import Item from '../item/item'
import './itemlist.css'

const ItemList = ({prods})=> {
    return(
    <>
        {prods.map((prod) =>(
            <Item key={prod.id} prod={prod}/>
            ))}
    </>
    )
}

export default ItemList