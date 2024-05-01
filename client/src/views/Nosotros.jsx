// AboutUsPage.js

import React from "react";
import HeaderMain from "../componets/Header_Main";
import FooterMain from "../componets/Footer_Main";
import InstructorCard from "../componets/Nosotros/Card_InstructorNosotros"; // Importamos el componente de la tarjeta del instructor
import "../styles/Nosotros.css";

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
  <div className="about-us-content">
    <h2>Nuestra Misión</h2>
    <p>
      En el Gimnasio CEC-FGI, nuestra misión es proporcionar un entorno
      inclusivo y motivador donde personas de todas las edades y habilidades
      puedan alcanzar sus metas de fitness y bienestar.
    </p>
  </div>

  <div className="about-us-content">
    <h2>Nuestra Visión</h2>
    <p>
      Queremos ser reconocidos como el gimnasio líder en nuestra comunidad,
      ofreciendo programas de entrenamiento innovadores, servicios de alta
      calidad y un ambiente acogedor que inspire a nuestros miembros a vivir
      vidas más saludables y activas.
    </p>
  </div>

  <div className="about-us-content">
    <h2>Nuestros Valores</h2>
    <ul>
      <li>Compromiso con la excelencia</li>
      <li>Integridad y ética profesional</li>
      <li>Respeto y empatía hacia nuestros miembros</li>
      <li>Innovación y mejora continua</li>
      <li>Trabajo en equipo y colaboración</li>
    </ul>
  </div>

  <div className="about-us-content">
    <h2>Nuestros Instructores</h2>
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