import { ComponenteOptionSelect } from "./ComponenteOptionSelect";
import { ComponenteInput } from "./ComponenteInput";
import { ComponenteCotizador } from "./ComponenteCotizador";
import { useState, useEffect } from "react";



export const ComponenteFormulario = () => {

  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [metros, setMetros] = useState(20);
  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

  const guardarHistorial = localStorage.getItem("historialCotizaciones");
  const historialOjeto = JSON.parse(guardarHistorial);


  useEffect(() => {
    if (historialOjeto) {
      setHistorialCotizaciones(historialOjeto);
    } else {
      setHistorialCotizaciones([]);
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <ComponenteOptionSelect nombre={'propiedad'} opcion={'Selecciona el tipo de propiedad '} onFactorChange={(valor1) => setValor1(valor1)} />
        <ComponenteOptionSelect nombre={'ubicacion'} opcion={'Seleciona su ubicacion '} onFactorChange={(valor2) => setValor2(valor2)} />
        <ComponenteInput onMetrosChange={(metros) => setMetros(metros)} metros={metros}/>
        <ComponenteCotizador propiedad={valor1} ubicacion={valor2} metrosCuadrados={metros} onHistorialSave={(historialCotizaciones) => setHistorialCotizaciones(historialCotizaciones)}/>
      </form>
    </div>

  )
}

