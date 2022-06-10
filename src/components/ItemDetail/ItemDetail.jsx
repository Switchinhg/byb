import './ItemDetail.css'

export const ItemDetail = ({producto}) => {

return (
    <div className="prodInfo">
        <div className="wrapper">
            <div className="tituloimg">
                <h2>{producto.prodName}</h2>
                <img src={producto.img} alt="" />
            </div>
            <div className="info">
                <p>Categoria: {producto.categoria}</p>
                <p>{producto.info}</p>
                <p>${producto.precio}</p>
            </div>
            <button className='boton'>comprar</button>
        </div>
    </div>
)
}
