import React, { useState } from "react";
import Calculadora from "../componets/Calculadora";
import Resultado from "../componets/Resultado";

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"

const Evaluaciones = () => {
  const [imc, setIMC] = useState(null);
  const [porcentajeGrasa, setPorcentajeGrasa] = useState(null);

  const calcularResultados = (peso, estatura) => {
    // Calcular IMC
    const nuevoIMC = peso / (estatura * estatura);
    setIMC(nuevoIMC);

    // Calcular porcentaje de grasa corporal (implementación simulada)
    const nuevoPorcentajeGrasa = 20; // Esto debería calcularse correctamente
    setPorcentajeGrasa(nuevoPorcentajeGrasa);
  };

  return (
    <div>
      <Header/>
      <h1>Calculadora de IMC y Porcentaje de Grasa Corporal</h1>
      <Calculadora calcularResultados={calcularResultados} />
      {imc !== null && porcentajeGrasa !== null && (
        <Resultado imc={imc} porcentajeGrasa={porcentajeGrasa} />
      )}
      <Footer/>
    </div>
    
  );
};

export default Evaluaciones;
