import img1 from '../../imgs/img_productos/camita_almohadon_chico_1.jpg'

const Producto = () => {
    return (
        <div className="producto">
            <img className="producto_img" src={img1} alt="" />
            <p className="producto_nombre"><b>Nombre Producto(Camita)</b></p>
            <p className="producto_info">info producto</p>
            <p className="precio">precio</p>
            <button className="boton">Más Información</button>
        </div>
    )
}

export default Producto