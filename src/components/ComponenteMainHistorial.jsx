import { ComponenteBackHome } from "./ComponenteBackHome";

export const ComponenteMainHistorial = ({historial }) => {
    const historial1 = historial || []; // 
    return (
        <>
            <main>
                <div className="center div-cotizador">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha de cotización</th>
                                <th>Propiedad</th>
                                <th>Ubicación</th>
                                <th>Metros cuadrados</th>
                                <th>Póliza mensual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historial1.map((cotizacion, index) => (
                                <tr key={index}>
                                    <td>{cotizacion.fechaCotizacion}</td>
                                    <td>{cotizacion.propiedad.tipo}</td>
                                    <td>{cotizacion.ubicacion.tipo}</td>
                                    <td>{cotizacion.metrosC}</td>
                                    <td>{cotizacion.precioFinal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ComponenteBackHome />

                </div>

            </main>
        </>
    )
}
