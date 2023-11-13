import { Link } from "react-router-dom"

export const ComponenteHeader = () => {
    return (
        <header>
            <div className="historial">
                <nav>
                    <Link to="/historial"><span title="Ver Historial">📋</span> </Link>
                </nav>
            </div>
            <div>
                <h1 className="center separador">Seguros del hogar 🏡</h1>
            </div>

        </header>
    )
}
