import { useState } from "react"

export const ComponenteInput = () => {
    const [metros, setMetros] = useState(20)
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
