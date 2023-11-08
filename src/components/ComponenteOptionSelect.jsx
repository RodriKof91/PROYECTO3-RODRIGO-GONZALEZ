import React, { useState } from 'react';
import jsonData from '../datos.json';

export const ComponenteOptionSelect = ({ nombre, opcion }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [factor, setFactor] = useState(null); 
  const [factor2, setFactor2] = useState(null); 


  const handleSeleccion = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);

    const objetoSeleccionado = jsonData.find((item) => item.tipo === valorSeleccionado);
    if (objetoSeleccionado) {
      if (objetoSeleccionado.categoria==='propiedad'){
        setFactor(objetoSeleccionado.factor);
      }
      else{
        setFactor2(objetoSeleccionado.factor);

      }
    } else {
      setFactor(null);
      setFactor2(null);
    }
  };

  const filteredData = jsonData.filter((item) => item.categoria === nombre);

  return (
    <>
      <label htmlFor="">{opcion}</label>
      <select value={opcionSeleccionada} onChange={handleSeleccion}>
        <option value="">...</option>
        {filteredData.map((item) => (
          <option key={item.tipo} value={item.tipo}>
            {item.tipo}
          </option>
        ))}
      </select>
      {factor !== null && <p>Factor seleccionado: {factor}</p>}
      {factor2 !== null && <p>Factor seleccionado: {factor2}</p>}

    </>
  );
};
