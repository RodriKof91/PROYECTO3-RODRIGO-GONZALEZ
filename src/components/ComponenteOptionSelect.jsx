import React, { useState } from 'react';
import jsonData from '../datos.json';

export const ComponenteOptionSelect = ({ nombre, opcion, onFactorChange }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
 


  const handleSeleccion = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);

    const objetoSeleccionado = jsonData.find((item) => item.tipo === valorSeleccionado);
    if (objetoSeleccionado) {
      if (objetoSeleccionado.categoria==='propiedad'){
        onFactorChange(objetoSeleccionado.factor);      }
      else{
        onFactorChange(objetoSeleccionado.factor);
      }
    } else {
      onFactorChange(null);
    }
  };

  const filteredData = jsonData.filter((item) => item.categoria === nombre);

  return (
    <>
      <label htmlFor="">{opcion}</label>
      <select value={opcionSeleccionada} onChange={handleSeleccion}>
        <option value="" disabled>...</option>
        {filteredData.map((item) => (
          <option key={item.tipo} value={item.tipo}>
            {item.tipo}
          </option>
        ))}
      </select>

    </>
  );
};
