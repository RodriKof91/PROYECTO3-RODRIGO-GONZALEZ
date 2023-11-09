import React, { useState } from 'react'
import styled from 'styled-components'

const StyleCotizador = styled.div`
  margin: 20px;
  text-align: center;
`

export const ComponenteCotizador = ({valorPropiedad, valorUbicacion, metrosCuadrados}) => {
  const [precio, setPrecio] = useState(0.00)
  const calcularPrecio = () => {
    if (valorPropiedad !== null && valorUbicacion !== null && metrosCuadrados > 19) {
      const resultado = valorPropiedad * valorUbicacion * metrosCuadrados * 35.86;
      setPrecio(resultado.toFixed(2));
    }
  };

  return (
    <div>
      <button onClick={calcularPrecio}>Cotizar</button>
      <p>Precio estimado: $ {precio}</p>
    </div>
  )
}
