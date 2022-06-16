import './NavBar.css'
import logo from '../../imgs/bigandbonnie1.png'
import CartWidget from '../CartWidget/cart'
import {Link, NavLink} from 'react-router-dom'


export default function NavBar() {
    return(
        <div className="maincontainer">

        <div className="NavBar">
            <header>
                <div className="header-container">
                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                        
                        </div>
                    <div className="navbar-input"><input type="text" placeholder='BUSCAR' /></div>
                    <div className="topbar">

                
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