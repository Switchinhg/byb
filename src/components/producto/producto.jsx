import img1 from '../../imgs/img_productos/camita_almohadon_chico_1.jpg'
import './producto.css'
import ItemCount from '../itemCount/itemCount'


const Producto = (props) => {

    return (
        <div className="producto">
            <img className="producto_img" src={img1} alt="" />
            <p className="producto_nombre"><b>Nombre Producto(Camita)</b></p>
            <p className="producto_info">info producto</p>
            <p className="precio">Stock: {props.stock}</p>
            <ItemCount stock={props.stock} initial={1}/>
        </div>
    )
}

export default Producto