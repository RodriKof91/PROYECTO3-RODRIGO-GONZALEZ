import React, { useState, useEffect } from 'react';

export const ComponenteOptionSelect = ({ nombre, opcion, onFactorChange }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch('/datos.json');

      const data = await response.json();
      setJsonData(data);
    };

    fetchData();
  }, []);

  const handleSeleccion = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);

    const objetoSeleccionado = jsonData.find((item) => item.tipo === valorSeleccionado);

    if (objetoSeleccionado) {
      onFactorChange(objetoSeleccionado);
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
