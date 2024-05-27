import React, { useState } from 'react';
import '../styles/Gimnasio.css';

import Header from "../componets/Header_Main"
import Novedades from "../componets/Comp_Noti_Nov"
import Footer from "../componets/Footer_Main"


import RitmosFitness from "../assets/images/Clases/Ritmos.jpg"
import FullKombat from "../assets/images/Clases/FullKombat.jpg"
import Rebound from "../assets/images/Clases/Rebound.jpg"
import Duracion from "../assets/images/duracion-clases.svg";
import Intensidad from "../assets/images/intensidad.svg"

function GimnasioPage() {
    const [checks, setChecks] = useState([
        { isChecked: false, text: 'Estructuras' },
        { isChecked: false, text: 'Estacionamiento' },
        { isChecked: false, text: 'Elevador' },
        { isChecked: false, text: 'Lacto - Bar' },
        { isChecked: false, text: 'Nutricionista' },
        { isChecked: false, text: 'Full Kombat' },
        { isChecked: false, text: 'Ritmos Fitness' },
        { isChecked: false, text: 'Rebound Xtreme' },
        { isChecked: false, text: 'Step-Z' },
        { isChecked: false, text: 'Entrenamiento Funcional' },
      ]);

      const handleCheckChange = (index) => {
        const newChecks = [...checks];
        newChecks[index].isChecked = !newChecks[index].isChecked;
        setChecks(newChecks);
      };


      const handleFilterSubmit = () => {
        const selectedFilters = checks.filter(check => check.isChecked).map(check => check.text);
        console.log('Selected filters:', selectedFilters);

        // Enviar los filtros seleccionados al backend (asumimos que tienes un endpoint configurado)
        fetch('https://your-backend-url.com/filters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filters: selectedFilters }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Actualizar la UI según los resultados filtrados si es necesario
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };





  return (
    <div className='Container_Main'>
            <Header />
            <div className='contenedor_buscador_gimnasio'>
                <h2>Elige Alguno de Nuestros Centros de Entrenamiento</h2>
                <div className='contenedor_buscador'>
                    <input type="text" placeholder="Encuentra un gimnasio" />
                    <button onClick={handleFilterSubmit}>
                        Filtrar
                    </button>
                </div>
            </div>

            <div className='contendor_principal_gym'>
                <div className='contenedor_1_gimnasios'>
                    {checks.map((item, index) => (
                        <div key={index} className='Lista-filtro'>
                            <label>{item.text}</label>
                            <input
                                type="checkbox"
                                checked={item.isChecked}
                                onChange={() => handleCheckChange(index)}
                            />
                        </div>
                    ))}
                </div>
                <div className='contenedor_2_gimnasios'>
                    <div className="Instalacion_Containers">
                        <div className="instalacion_container">
                            <img src={RitmosFitness} alt="" className="imagen_Instalacion" />
                            <div className="Clases_titulo_Container">
                                <a>CEC-FGI GOLD</a>
                            </div>
                            <div className="contenido_clases_detalle">
                                <div className="detalle_clase">
                                    <img src={Duracion} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Duración</p>
                                    <p className="detalle_descripcion">30/40/50 min</p>
                                </div>
                                <div className="detalle_clase">
                                    <img src={Intensidad} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Intensidad</p>
                                    <p className="detalle_descripcion">Alta</p>
                                </div>
                            </div>
                            <div className="contenedor_Apartador">
                                <hr className="Apartador" />
                            </div>
                            <div className="contenedor_Texto">
                                <p className="Text_programas">
                                    Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                                </p>
                            </div>
                        </div>
                        <div className="instalacion_container">
                            <img src={FullKombat} alt="" className="imagen_Instalacion" />
                            <div className="Clases_titulo_Container">
                                <a>Platinum CEC</a>
                            </div>
                            <div className="contenido_clases_detalle">
                                <div className="detalle_clase">
                                    <img src={Duracion} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Duración</p>
                                    <p className="detalle_descripcion">30/40/50 min</p>
                                </div>
                                <div className="detalle_clase">
                                    <img src={Intensidad} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Intensidad</p>
                                    <p className="detalle_descripcion">Alta</p>
                                </div>
                            </div>
                            <div className="contenedor_Apartador">
                                <hr className="Apartador" />
                            </div>
                            <div className="contenedor_Texto">
                                <p className="Text_programas">
                                    Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                                </p>
                            </div>
                        </div>
                        <div className="instalacion_container">
                            <img src={Rebound} alt="" className="imagen_Instalacion" />
                            <div className="Clases_titulo_Container">
                                <a>Rebound Xtreme</a>
                            </div>
                            <div className="contenido_clases_detalle">
                                <div className="detalle_clase">
                                    <img src={Duracion} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Duración</p>
                                    <p className="detalle_descripcion">30/40/50 min</p>
                                </div>
                                <div className="detalle_clase">
                                    <img src={Intensidad} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Intensidad</p>
                                    <p className="detalle_descripcion">Alta</p>
                                </div>
                            </div>
                            <div className="contenedor_Apartador">
                                <hr className="Apartador" />
                            </div>
                            <div className="contenedor_Texto">
                                <p className="Text_programas">
                                    Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Novedades />
            <Footer />
        </div>
  );
}

export default GimnasioPage;
