import React from "react";
import { Link } from 'react-router-dom';
import BannerVideoHome from "../assets/videos/BannerHome.mp4"

import "../App.css"



import Busqueda from "../assets/images/busqueda.svg"

import "../styles/home_styles.css"

import Header from "../componets/Header_Main"
import SectionProgramas from "../componets/ClasesCEC"
import Planes from "../componets/Comp_Planes"
import Instalaciones from "../componets/Comp_Instalacion"
import Complemento from '../componets/Comp_Complemento'
import Descarga from "../componets/Comp_Descargar"
import Novedades from "../componets/Comp_Noti_Nov"
import Footer from "../componets/Footer_Main"

function BannerHome(){

    
    return( 
        <div className="App-header">
           <Header/>
            <section className="Banner_Home_Main">
                <video autoPlay muted className="Banner_video">
                    <source src={BannerVideoHome} type="video/mp4"/>

                </video>

                <a href="/Entrenamiento" className="Banner_Home_Action">

                </a>    
                <div className="Banner_content">
                    <h1>¿Listo Para Entrenar?</h1>
                    <p>
                        Recuerda, entrenar por el cuerpo que deseas
                    </p>
                    <Link to="/Planes de inscripcion"className="content_Find_Center">
                        <button className="Banner_boton_llamado">
                            Empieza hoy !
                        </button>
                    </Link>
                </div>
            </section>
            
            <h2>Encuentra un Centro<span> CEC - FGI</span> Cerca</h2>

          
            
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
            

            <Planes/>
            <Instalaciones/>
            <SectionProgramas/>
            <Descarga/>
            <Complemento/>
            <Novedades/>
            <Footer/>
        </div>
    )
}export default BannerHome