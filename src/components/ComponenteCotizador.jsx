import React, { useState } from 'react'
import styled from 'styled-components'

const StyleCotizador = styled.div`
  margin: 20px;
  text-align: center;
`

export const ComponenteCotizador = () => {
    const [precio, setPrecio] = useState(0.00)

  return (
    <div>
        <button>Cotizar</button>
        <p>Precio estimado: $ {precio}</p>
    </div>
  )
}
