import { useState } from "react"

export const ComponenteInput = ({onMetrosChange, metros}) => {

    const cambiarEntrada = (event) => {
        const nuevosMetros = event.target.value
        onMetrosChange(nuevosMetros);
    }
    return (
        <>
            <label>Ingrese metros cuadrados: </label>
            <input
                value={metros}
                min={metros}
                type= "number"
                onChange={(event) => cambiarEntrada(event)}
            />
        </>

    )
}
