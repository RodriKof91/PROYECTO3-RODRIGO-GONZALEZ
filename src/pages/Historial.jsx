import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ComponenteHistorialHeader } from '../components/ComonenteHistorialHeader';
import { ComponenteBackHome } from '../components/ComponenteBackHome';
import { ComponenteMainHistorial } from '../components/ComponenteMainHistorial';

export const Historial = () => {
    return (
        <>
        <ComponenteHistorialHeader />
        <ComponenteMainHistorial />
        <ComponenteBackHome />
        </>

    )
}
