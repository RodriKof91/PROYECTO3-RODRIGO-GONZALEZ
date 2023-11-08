import { ComponenteOptionSelect } from "./ComponenteOptionSelect";
import { ComponenteInput } from "./ComponenteInput";
import { ComponenteCotizador } from "./ComponenteCotizador";

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

  const onSubmit = (event) => {
    event.preventDefault();
  }

export const ComponenteFormulario = () => {
  return (
    <FormularioDivStyle>
      <h2>Completa los datos solicitados</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <ComponenteOptionSelect nombre={'propiedad'} opcion={'Selecciona el tipo de propiedad '}/>
        <ComponenteOptionSelect nombre={'ubicacion'} opcion={'Seleciona su ubicacion '}/>
        <ComponenteInput />
        <ComponenteCotizador />
      </form>
    </FormularioDivStyle>

  )
}
