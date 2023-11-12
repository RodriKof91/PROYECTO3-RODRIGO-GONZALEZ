import { Link } from "react-router-dom"

export const ComponenteHeader = () => {
    return (
        <header>
            <div>
                <nav>
                    <Link to="/historial">📋 </Link>
                </nav>
            </div>
            <div>
                <h1>Seguros del hogar 🏡</h1>
            </div>

        </header>
    )
}
