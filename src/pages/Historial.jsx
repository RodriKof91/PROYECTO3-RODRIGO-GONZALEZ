import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Historial = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
            <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
              <th>Acción</th>
            </tr>
          </thead>
          </table>
            </div>
            <div>
                <button onClick={() => navigate(-1)}>VOLVER</button>

            </div>
        </>

    )
}
