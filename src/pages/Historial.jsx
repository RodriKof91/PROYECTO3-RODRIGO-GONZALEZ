import React from 'react'
import { ComponenteHistorialHeader } from '../components/ComonenteHistorialHeader';
import { ComponenteBackHome } from '../components/ComponenteBackHome';
import { ComponenteMainHistorial } from '../components/ComponenteMainHistorial';

export const Historial = () => {
  const historialJSON = localStorage.getItem("historialCotizaciones");
  const historial = JSON.parse(historialJSON);
  console.log(historial);
    return (
        <>
        <ComponenteHistorialHeader />
        <ComponenteMainHistorial historial={historial}>
        </ComponenteMainHistorial>
        </>

    )
}
