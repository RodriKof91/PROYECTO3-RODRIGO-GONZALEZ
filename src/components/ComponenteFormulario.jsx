import { ComponenteOptionSelect } from "./ComponenteOptionSelect";
import { ComponenteInput } from "./ComponenteInput";
import { ComponenteCotizador } from "./ComponenteCotizador";
import { useState, useEffect } from "react";

import styled from "styled-components";

const FormularioDivStyle = styled.div`
  background-color: rgb(255,255,255);
  max-width: 900px;
  margin: auto;
  padding: 10px;
  border-color: whitesmoke;
  box-shadow: 26px 28px 25px -8px rgba(0,0,0,0.15);
  text-align: center;
  `

export const ComponenteFormulario = () => {

  const [valor1, setValor1] = useState(null);
  const [valor2, setValor2] = useState(null);
  const [metros, setMetros] = useState(20);
  const [historial, setHistorial] = useState([]);



  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <FormularioDivStyle>
      <h2>Completa los datos solicitados</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <ComponenteOptionSelect nombre={'propiedad'} opcion={'Selecciona el tipo de propiedad '} onFactorChange={(valor1) => setValor1(valor1)} />
        <ComponenteOptionSelect nombre={'ubicacion'} opcion={'Seleciona su ubicacion '} onFactorChange={(valor2) => setValor2(valor2)} />
        <ComponenteInput onMetrosChange={(metros) => setMetros(metros)} metros={metros}/>
        <ComponenteCotizador propiedad={valor1} ubicacion={valor2} metrosCuadrados={metros} historial={historial} onHistorialSave={(historial) => setHistorial(historial)}/>
      </form>
    </FormularioDivStyle>

  )
}

