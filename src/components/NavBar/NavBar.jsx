import './NavBar.css'
import logo from '../../imgs/bigandbonnie1.png'
import CartWidget from '../CartWidget/cart'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { VerBoton } from '../verificaciones/verificaciones'
import Catalogo from '../Catalogo/Catalogo'
import BuscadorContainer from '../BuscadorContainer/BuscadorContainer'


export default function NavBar() {
    
    return(
        <div className="maincontainer">

        <div className="NavBar">
            <header>
                <div className="header-container">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                        
                        </div>

                    <BuscadorContainer />

                    <div className="topbar">

                    <VerBoton>Admin</VerBoton>
                    <NavLink to='/'  className={({ isActive })=> isActive ?  'selected': 'deselected'}>Inicio</NavLink>

                    <NavLink to="/catalogo" className={({ isActive })=> isActive ?  'selected': 'deselected'}>Catalogo</NavLink>
                    <NavLink to="/contacto" className={({ isActive })=> isActive ?  'selected': 'deselected'}>Contacto</NavLink>
                    </div>
                    <div className="cart">
                        <Link to='/cart'>
                            <CartWidget />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
        </div>
    )
}