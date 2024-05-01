import React from "react";
import "../App.css"
import "../styles/home_styles.css"
import RitmosFitness from "../assets/images/Clases/Ritmos.jpg"
import FullKombat from "../assets/images/Clases/FullKombat.jpg"
import Rebound from "../assets/images/Clases/Rebound.jpg"
import Duracion from "../assets/images/duracion-clases.svg";
import Intensidad from "../assets/images/intensidad.svg"

function ProgramaMain(){

    
    return( 
    <section className="Programas_container">
        <h2>
            Conoce Todo sobre <span>CEC - FGI</span>
        </h2>

        <div className="Instalacion_Containers">
            <div className="instalacion_container">
                <img src={RitmosFitness} alt="" className="imagen_Instalacion"/>
                <div className="Clases_titulo_Container">
                    <a>Ritmos Fitness</a>
                </div>
                <div className="contenido_clases_detalle">
                    <div className="detalle_clase">
                        <img src={Duracion} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Duración</p>
                        <p className="detalle_descripcion">30/40/50 min</p>
                    </div>
                    <div className="detalle_clase">
                        <img src={Intensidad} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Intensidad</p>
                        <p className="detalle_descripcion">Alta</p>
                    </div>
                </div>
                <div className="contenedor_Apartador">
                    <hr className="Apartador"/>
                </div>
                <div className="contenedor_Texto">
                    <p className="Text_programas">
                        Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                    </p>
                </div>
            </div>
            <div className="instalacion_container">
                <img src={FullKombat} alt="" className="imagen_Instalacion"/>
                <div className="Clases_titulo_Container">
                    <a>Full Kombat</a>
                </div><div className="contenido_clases_detalle">
                    <div className="detalle_clase">
                        <img src={Duracion} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Duración</p>
                        <p className="detalle_descripcion">30/40/50 min</p>
                    </div>
                    <div className="detalle_clase">
                        <img src={Intensidad} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Intensidad</p>
                        <p className="detalle_descripcion">Alta</p>
                    </div>
                </div>
                <div className="contenedor_Apartador">
                    <hr className="Apartador"/>
                </div>
                <div className="contenedor_Texto">
                    <p className="Text_programas">
                        Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                    </p>
                </div>
            </div>
            <div className="instalacion_container">
                <img src={Rebound} alt="" className="imagen_Instalacion"/>
                <div className="Clases_titulo_Container">
                    <a>Rebound Xtreme</a>
                </div>
                <div className="contenido_clases_detalle">
                    <div className="detalle_clase">
                        <img src={Duracion} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Duración</p>
                        <p className="detalle_descripcion">30/40/50 min</p>
                    </div>
                    <div className="detalle_clase">
                        <img src={Intensidad} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Intensidad</p>
                        <p className="detalle_descripcion">Alta</p>
                    </div>
                </div>
                <div className="contenedor_Apartador">
                    <hr className="Apartador"/>
                </div>
                <div className="contenedor_Texto">
                    <p className="Text_programas">
                        Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                    </p>
                </div>
            </div>
        </div>
        <button className="Banner_boton_llamado">
            ¡Inscríbete ya!
        </button>
    </section>
    )
}
export default ProgramaMain