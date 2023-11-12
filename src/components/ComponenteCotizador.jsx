import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from "sweetalert2";
import Ellipsis from '/images/ellipsis.gif'

const StyleCotizador = styled.div`
  margin: 20px;
  text-align: center;
`

export const ComponenteCotizador = ({ valorPropiedad, valorUbicacion, metrosCuadrados }) => {
  const [precio, setPrecio] = useState(0.00)
  const [botonValor, setBotonValor] = useState('Cotizar')
  const [historial, setHistorial] = useState([])

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
      setBotonValor(<img src={Ellipsis}></img>);

      const resultado = valorPropiedad * valorUbicacion * metrosCuadrados * 35.86;
      setTimeout(() => {


        alerta("", "Cotización realizada con éxito.", "success");
        setBotonValor('Cotizar');
        setPrecio(resultado.toFixed(2));
      }, 2500);
    }
    else {
      alerta("", "Debes completar todos los datos en pantalla.", "warning");
    }

  }
  
    ;

  return (
    <>
      <div>
        <button className='btnCotizar' onClick={calcularPrecio}>{botonValor}</button>

      </div>
      <div>
        <p>Precio estimado: $ {precio}</p>
      </div>


    </>
  )
}
