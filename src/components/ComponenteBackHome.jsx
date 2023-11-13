import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ComponenteBackHome = () => {
    const navigate = useNavigate();
    const borrar = () => {
        localStorage.clear();
    }
    return (
        <div className="center separador">
            <button className='button button-outline' onClick={() => navigate(-1)}>VOLVER</button>

        </div>
    )
}
