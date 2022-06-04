import './item.css'

const Item = (prop) => {
    console.log(prop.prod.img)
    return(
        <div className="producto" >
            
            <img className="producto_img" src={ prop.prod.img } alt="" />
            <p className="producto_nombre"><b>{prop.prod.prodName}</b></p>
            <p className="producto_info">{prop.prod.info}</p>
            <p className="producto_precio">$ {prop.prod.precio}</p>
            <button className='boton'>Ver Más</button>

        </div>
        
    )
}

export default Item