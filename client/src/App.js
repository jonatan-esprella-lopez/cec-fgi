import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import "./styles.css"

// Para que funcione realizar la instalacion de npm install react-chartjs-2 chart.js


const App = () => {
  const [datos, setDatos] = useState({
    inversionInicial: 10000,
    flujosDeCaja: [-10000, 2000, 2500, 3000, 4000]
  });

  const calcularTIR = () => {
    const { inversionInicial, flujosDeCaja } = datos;
    let tir = 0;

    // Lógica para calcular la TIR (puedes usar bibliotecas externas como financial.js para un cálculo más preciso)
    // Aquí se usa un método de aproximación simple
    const irr = (cashflows, investment) => {
      const epsilon = 0.00001;
      let resultRate = 0.1; // Asumimos una tasa inicial de 10%
      let interationCount = 0;

      while (interationCount < 1000) {
        let npv = 0;

        for (let i = 0; i < cashflows.length; i++) {
          npv += cashflows[i] / Math.pow((1 + resultRate), i);
        }

        npv += investment;

        if (Math.abs(npv) < epsilon) {
          break;
        }

        let dnpv = 0;

        for (let i = 0; i < cashflows.length; i++) {
          dnpv += -i * cashflows[i] / Math.pow((1 + resultRate), i + 1);
        }

        resultRate -= npv / dnpv;
        interationCount++;
      }

      return (resultRate * 100).toFixed(2); // Convertimos a porcentaje y redondeamos a 2 decimales
    };

    tir = irr(flujosDeCaja, -inversionInicial);

    return tir;
  };

  const graficoDatos = {
    labels: ['Inicio'].concat(datos.flujosDeCaja.map((_, index) => `Periodo ${index + 1}`)),
    datasets: [
      {
        label: 'Flujo de Caja',
        data: [0].concat(datos.flujosDeCaja),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="container">
      <h1>Calculadora de TIR</h1>
      <div className="tir-container">
        <div>
          <h2>Entrada de Datos</h2>
          <form>
            <div>
              <label htmlFor="inversionInicial">Inversión Inicial:</label>
              <input
                type="number"
                id="inversionInicial"
                value={datos.inversionInicial}
                onChange={(e) =>
                  setDatos({ ...datos, inversionInicial: parseInt(e.target.value) })
                }
              />
            </div>
            <div>
              <label htmlFor="flujosDeCaja">Flujos de Caja:</label>
              <input
                type="text"
                id="flujosDeCaja"
                placeholder="Separados por comas, ej: -10000,2000,2500,3000,4000"
                value={datos.flujosDeCaja.join(',')}
                onChange={(e) =>
                  setDatos({
                    ...datos,
                    flujosDeCaja: e.target.value.split(',').map((value) => parseInt(value)),
                  })
                }
              />
            </div>
          </form>
        </div>
        <div>
          <h2>Resultado</h2>
          <p>TIR: {calcularTIR()}%</p>
        </div>
      </div>
      <div className="chart-container">
        <Line data={graficoDatos} />
      </div>
    </div>
  );
};

export default App;
