import jsonData from '../datos.json'
const datos = jsonData;

export const ComponenteLabel = ({ nombre ,opcion}) => {
    const filteredData = jsonData.filter((item) =>
        item.categoria === nombre);
    return (
        <>

            <label htmlFor="">{opcion}</label>

            <select>
                <option value="">...</option>
                {filteredData.map((item) => (
                    <option key={item.tipo}>
                        {item.tipo}
                    </option>
                ))}
            </select>

        </>

    )
}
