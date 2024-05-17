import React from "react";
import { Link } from 'react-router-dom';
import "../App.css"
import Logo from "../assets/images/CEC/Logo.svg"

import "../styles/home_styles.css"

function HeaderMain(){

    
    return( 
    <header className="conteiner_header">
        <div className="contenedor_Logo">
            <a href="/">
                <img src={Logo} alt="" className="logo_header"/>
            </a>
        </div>
        <nav className="contenedor_Link_Paginas">
                    
            <Link to="/"><p className="Link_Paginas">Home</p></Link>
            <Link to="/Nuestras rutinas"><p className="Link_Paginas">Ruttinas</p></Link>
            <Link to="/Nutricion"><p className="Link_Paginas">Nutricion</p></Link>
            <Link to="/Nuestros Gimnasios"><p className="Link_Paginas">Gimnasios</p></Link>
            <Link to="/Evaluaciones"><p className="Link_Paginas">Evaluaciones</p></Link>
            <Link to="/Nosotros"><p className="Link_Paginas">Nosotros</p></Link>
            <Link to="/Soporte"><p className="Link_Paginas">Soporte</p></Link>

            <Link to="/login"><p className="Link_Paginas">Login</p></Link>
            <Link to="/registro"><p className="Link_Paginas">Registro</p></Link>
        </nav>
    </header>
    )
}
export default HeaderMain