import { memo } from 'react'
import { Link } from 'react-router-dom'
import './item.css'

const Item = memo(({ prod , donde}) => {
        return(
            <Link to={`/detalle/${prod.id}`}> 
            <div className="producto" >
                <img className="producto_img" src={ prod.img } alt="" />
                <p className="producto_nombre"><b>{prod.prodName}</b></p>
                {donde==='ILC'?null:<p className="producto_info">{prod.info}</p>}
                <p className="producto_precio">$ {prod.precio}</p>
            </div>
        </Link>
        
        )
    })

export default Item