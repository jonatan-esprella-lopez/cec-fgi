import React from "react";
import { Link } from "react-router-dom";
import "../styles/Busqueda.css"
import Busqueda from "../assets/images/busqueda.svg"

function BusquedaCEC(){

    
    return( 
        <div className="image_Find_Center">
            <Link to="/Nuestros Gimnasios"className="content_Find_Center">
                <button className="Banner_boton_gimnasio">
                    <p>Encuentra un centro</p>
                    <span>
                        <img src={Busqueda} alt="Lupa" className="iconos"/> 
                    </span>
                </button>
            </Link>
        </div>
    )
}
export default BusquedaCEC