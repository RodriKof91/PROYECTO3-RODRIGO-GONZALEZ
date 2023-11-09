import React, { useState } from 'react'
import styled from 'styled-components'

const StyleCotizador = styled.div`
  margin: 20px;
  text-align: center;
`

export const ComponenteCotizador = ({valorPropiedad, valorUbicacion, metros}) => {
  const [precio, setPrecio] = useState(0.00)
  const calcularPrecio = () => {
    if (valorPropiedad !== null && valorUbicacion !== null) {
      const resultado = valorPropiedad * valorUbicacion;
      setPrecio(resultado);
    }
  };

  return (
    <div>
      <button onClick={calcularPrecio}>Cotizar</button>
      {precio !== 0.00 && <p>Precio estimado: $ {precio}</p>}
      {valorPropiedad !== null && <p>Factor: {valorPropiedad}</p>}
      {valorUbicacion !== null && <p>Factor2: {valorUbicacion}</p>}
    </div>
  )
}
