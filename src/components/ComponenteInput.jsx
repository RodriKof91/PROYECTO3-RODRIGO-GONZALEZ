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
                type= "number"
                min={metros}
                onChange={(event) => cambiarEntrada(event)}
            />
        </>

    )
}
