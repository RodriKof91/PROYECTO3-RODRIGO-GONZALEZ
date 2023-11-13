import React, { useState } from 'react'
import Swal from "sweetalert2";
import Ellipsis from '/images/ellipsis.gif'


export const ComponenteCotizador = ({ propiedad, ubicacion, metrosCuadrados, onHistorialSave }) => {
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
      setBotonValor(<img src={Ellipsis} alt="Loading..."></img>);

      const resultado = propiedad.factor * ubicacion.factor * metrosCuadrados * 35.86;
      setTimeout(() => {


        alerta("", "Cotización realizada con éxito.", "success");
        setBotonValor('Cotizar');
        setPrecio(resultado.toFixed(2));
      }, 2500);


    }
    else {
      alerta("", "Debes completar todos los datos en pantalla.", "warning");
      setPrecio(0.00);
    }

  }

  const cotizacion = {
    fechaCotizacion: new Date().toLocaleString(),
    propiedad: propiedad,
    ubicacion: ubicacion,
    metrosC: metrosCuadrados,
    precioFinal: precio,
  }

  function guardarHistorial() {
    onHistorialSave((prevHistorial) => {
      const nuevoHistorial = [...prevHistorial, cotizacion];
      localStorage.setItem("historialCotizaciones", JSON.stringify(nuevoHistorial));
      return nuevoHistorial;
    });
  
    alerta("", "Cotización guardada con éxito.", "success");
  }
  
  
    ;

  return (
    <>
      <div className='center separador'>
        <button className='button button-outline' onClick={calcularPrecio}>{botonValor}</button>

      </div>
      <div className='center separador flex'>
        <p className='importe'>Precio estimado: $ {precio}</p>
        {precio !== 0 && (<button className='guardar' 
        onClick={guardarHistorial} 
        title='Guardar Historial'>💾</button>)}
      </div>
    </>
  )
}
