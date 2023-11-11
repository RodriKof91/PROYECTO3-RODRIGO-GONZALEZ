import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from "sweetalert2";
import Ellipsis from '/images/ellipsis.gif'

const StyleCotizador = styled.div`
  margin: 20px;
  text-align: center;
`

export const ComponenteCotizador = ({valorPropiedad, valorUbicacion, metrosCuadrados}) => {
  const [precio, setPrecio] = useState(0.00)

  function alerta(titulo, mensaje, icono) {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: "15rem",
    });
  }




  const calcularPrecio = () => {
    if (valorPropiedad !== null && valorUbicacion !== null && metrosCuadrados > 19) {

      const resultado = valorPropiedad * valorUbicacion * metrosCuadrados * 35.86;

      alerta("", "Cotización realizada con éxito.", "success");
      
      setPrecio(resultado.toFixed(2));
    }
    else {
      alerta("", "Debes completar todos los datos en pantalla.", "warning");
    }

  }
  
  ;

  return (
    <div>
      <button className='btnCotizar' onClick={calcularPrecio}>Cotizar</button>
      <p>Precio estimado: $ {precio}</p>
{/*       <img src={Ellipsis} alt="" />
 */}
    </div>
  )
}
