import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from "sweetalert2";
import Ellipsis from '/images/ellipsis.gif'

const StyleCotizador = styled.div`
  margin: 20px;
  text-align: center;
`

export const ComponenteCotizador = ({ propiedad, ubicacion, metrosCuadrados, onHistorialSave, historial }) => {
  const [precio, setPrecio] = useState(0.00);
  const [botonValor, setBotonValor] = useState('Cotizar');

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
    if (propiedad !== null && ubicacion !== null && metrosCuadrados > 19) {
      setBotonValor(<img src={Ellipsis}></img>);

      const resultado = propiedad.factor * ubicacion.factor * metrosCuadrados * 35.86;
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

  const cotizacion = {
    fechaCotizacion: new Date().toLocaleString(),
    propiedad: propiedad,
    ubicacion: ubicacion,
    metrosC: metrosCuadrados,
    precioFinal: precio,
  }

  function guardarHistorial(){
    onHistorialSave([...historial, cotizacion])
    alerta("", "Cotización guardada con éxito.", "success");
    localStorage.setItem(
      "historial",
      JSON.stringify(historial)
    );
  }
  
  
    ;

  return (
    <>
      <div>
        <button className='btnCotizar' onClick={calcularPrecio}>{botonValor}</button>

      </div>
      <div>
        <p>Precio estimado: $ {precio}</p>
        {precio !== 0 && (<button onClick={guardarHistorial}>💾</button>)}
      </div>

    </>
  )
}
