import { useState } from "react"

export const ComponenteInput = ({metros}) => {
    const cambiarEntrada = (event) => {
        setMetros(event.target.value)
    }
    return (
        <>
            <label>Ingrese metros cuadrados: </label>
            <input
                value={metros}
                type="text"
                onChange={(event) => cambiarEntrada(event)}
            />
        </>

    )
}
