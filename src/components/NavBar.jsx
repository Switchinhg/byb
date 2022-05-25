import './NavBar.css'
import logo from '../imgs/bigandbonnie1.png'

export default function NavBar() {
    return(
        <div className="maincontainer">

        <div className="NavBar">
            <header>
                <div className="header-container">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="navbar-input"><input type="text" placeholder='BUSCAR' /></div>
                    <div className="topbar">
                        <a href="./index.html">Inicio</a>
                        <a href="./index.html">Camas</a>
                        <a href="./index.html">Collares</a>
                        <a href="./index.html">Contacto</a>
                    </div>
                </div>
            </header>
        </div>
        </div>
    )
}