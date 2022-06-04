import ItemList from '../itemlist/itemlist'
import './ItemListContainer.css'

const ItemListContainer = () => {
  return (
    <div className="contenedor">
        <div className="destacados_titulo">
            <h1 className="titulos">Destacados</h1>
        </div>
        <div className="productos">
            <ItemList />
            
        </div>
    </div>
)
}

export default ItemListContainer

