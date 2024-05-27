// AboutUsPage.js

import React from "react";
import HeaderMain from "../componets/Header_Main";
import FooterMain from "../componets/Footer_Main";
import InstructorCard from "../componets/Nosotros/Card_InstructorNosotros"; // Importamos el componente de la tarjeta del instructor
import "../styles/Nosotros.css";
import Tarjeta from "../componets/Nosotros/Tarjeta-coach";
import Mision from "../componets/Nosotros/Tarjeta-Mision";
import Vision from "../componets/Nosotros/Tarjeta-Vision";
import ValoresCEC from "../componets/Nosotros/Tarjeta-Valores";

function AboutUsPage() {
  // Datos de ejemplo de los instructores
  const instructors = [
    {
      id: 1,
      name: "María González",
      photo: "url_de_la_foto",
      specialization: "Entrenamiento de fuerza",
    },
    {
      id: 2,
      name: "Juan Pérez",
      photo: "url_de_la_foto",
      specialization: "Yoga y meditación",
    },
    // Agrega más instructores según sea necesario
  ];

  return (
    <div>
      <HeaderMain />
      <div className="about-us-container">
        <div className="about-us-header">
          <h1>Sobre Nosotros</h1>
          
        </div>
        <div className="about-us-container">

        <Mision/>
        <Vision/>
        <ValoresCEC/>
  



  

  <div className="about-us-content">
    <h2>Nuestros Instructores</h2>
    <Tarjeta/>
    <div className="instructor-cards-container">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor.id}
          name={instructor.name}
          photo={instructor.photo}
          specialization={instructor.specialization}
        />
      ))}
    </div>
  </div>
</div>

      </div>
      <FooterMain />
    </div>
  );
}

export default AboutUsPage;