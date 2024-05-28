import React from "react";
import { Link } from 'react-router-dom';
import BannerVideoHome from "../assets/videos/BannerHome.mp4"

import "../App.css"




import "../styles/home_styles.css"

import Header from "../componets/Header_Main"
import SectionProgramas from "../componets/ClasesCEC"
import Instalaciones from "../componets/Comp_Instalacion"
import Complemento from '../componets/Comp_Complemento'
import Descarga from "../componets/Comp_Descargar"
import Novedades from "../componets/Comp_Noti_Nov"
import Footer from "../componets/Footer_Main"
import BuscarcentroCEC from "../componets/BuscarCentroCEC"

function Home(){
    const[data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);
    
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
            

            
            
            <Instalaciones/>
            <SectionProgramas/>
            <Descarga/>
            <Complemento/>
            <Novedades/>
            <BuscarcentroCEC/>
            <Footer/>
        </div>
    )
}export default Home;