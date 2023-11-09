import { useState } from "react"

export const ComponenteInput = ({onFactorChange}) => {
    const [metros, setMetros] = useState(20);

    const cambiarEntrada = (event) => {
        const nuevosMetros = event.target.value
        setMetros(nuevosMetros)
        onFactorChange(nuevosMetros);
    }
    return (
        <>
            <label>Ingrese metros cuadrados: </label>
            <input
                value={metros}
                type= "number"
                onChange={(event) => cambiarEntrada(event)}
            />
        </>

    )
}
