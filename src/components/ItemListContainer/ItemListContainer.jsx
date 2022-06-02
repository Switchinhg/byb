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
                <Producto stock={0}/>
                <Producto stock={24}/>
                <Producto stock={14}/>
            </div>
            <div className="row2">
                <Producto stock={8}/>
                <Producto stock={18}/>
                <Producto stock={12}/>
            </div>
        </div>
    </div>
)
}

export default ItemListContainer