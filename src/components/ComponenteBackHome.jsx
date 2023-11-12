import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ComponenteBackHome = () => {
    const navigate = useNavigate();
    return (
        <div><button onClick={() => navigate(-1)}>VOLVER</button></div>
    )
}
