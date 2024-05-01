import React from "react";
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
            <a href="/" className="Link_Paginas">Home</a>
            <a href="/Nuestras rutinas" className="Link_Paginas">Ruttinas</a>
            <a href="/Nutricion" className="Link_Paginas">Nutricion</a>
            <a href="/Nuestros Gimnasios" className="Link_Paginas">Gimnasios</a>
            <a href="/Evaluaciones" className="Link_Paginas">Evaluaciones</a>
            <a href="/Nosotros" className="Link_Paginas">Nosotros</a>
            <a href="" className="Link_Paginas">Soporte</a>

            <a href="/login" className="Link_Paginas">Login</a>
            <a href="/registro" className="Link_Paginas">Registro</a>
        </nav>
    </header>
    )
}
export default HeaderMain