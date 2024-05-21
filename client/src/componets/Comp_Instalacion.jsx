import React from "react";
import "../App.css"
import "../styles/Instalaciones/Areas.css"

import FindCenter from "../assets/images/findCenter.jpg"

function Instalaciones(){

    
    return( 
        <section className="Instalaciones_container">
                <h4>
                    Experimenta la calidad de entrenamiento en <span>CEC - FGI</span>, junto a profesionales en el área.
                </h4>

                <div className="Instalacion_Containers">
                    <div className="instalacion_container">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalacion de Entrenamiento Funcional</p>
                    </div>
                    <div className="instalacion_container">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalacion de Hidratacion y evaluación</p>
                    </div>
                    <div className="instalacion_container">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalación de Aerobicos</p>
                    </div>
                </div>
                <button className="Banner_boton_llamado">
                    ¡Comienza Ahora!
                </button>
            </section>
    )
}
export default Instalaciones