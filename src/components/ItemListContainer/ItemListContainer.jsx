import './ItemListContainer.css'
import Producto from '../producto/producto'

const ItemListContainer = () => {
  return (
    <div className="contenedor">
        <div className="destacados_titulo">
            <h1 className="titulos">Destacados</h1>
        </div>
        <div className="productos">

            <div className="row1">
                <Producto />
                <Producto />
                <Producto />
            </div>
            <div className="row2">
                <Producto />
                <Producto />
                <Producto />
            </div>
            
        </div>
    </div>
)
}

export default ItemListContainer