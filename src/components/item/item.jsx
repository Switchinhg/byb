import { Link } from 'react-router-dom'
import './item.css'

const Item = ({prod}) => {
    return(
        <div className="producto" >
            <img className="producto_img" src={ prod.img } alt="" />
            <p className="producto_nombre"><b>{prod.prodName}</b></p>
            <p className="producto_info">{prod.info}</p>
            <p className="producto_precio">$ {prod.precio}</p>

            <Link to={`/detalle/${prod.id}`}>
            <button className='boton'>Ver Más</button>
            </Link>
        </div>
        
    )
}

export default Item