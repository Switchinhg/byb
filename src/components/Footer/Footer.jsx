import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className="footerc">

    <div className='contenedor'>
        <div className="footer">

        
            <div className="logo">
            <img src={"./img/BB1.png"} alt="" />
            </div>
            <div className="sitemap">
                <h4>Sitemap</h4>
                    <li><Link to='/' > Inicio </Link></li>
                    <li><Link to='/catalogo' > Catalogo </Link></li>
                    <li><Link to='/contacto' > Contacto </Link></li>
            </div>
            <div className="pagos">
                <h4>Envios</h4>
                <h4>Pagos</h4>

            </div>
            <div className="redes">
                <h4>Redes</h4>
                <div className="links">
               <a href="https://www.instagram.com/bigbonniepets/"><img src={'./img/instagram.webp'} alt="Logo Instagram" /></a> 
               <a href="https://www.facebook.com/Big-Bonnie-112039517783862"><img src={'./img/facebook.png'} alt="Logo Facebook" /></a>
                
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer