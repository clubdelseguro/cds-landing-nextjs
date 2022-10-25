import Link from 'next/link';
import React from 'react';
import { CardEnTuRegion } from '../CardEnTuRegion';

export const CardsEnTuRegion = () => {
    return (
        <div className="cards-en-tu-region">
            <h2 className="title-en-tu-region">Seguro Automotriz en tu región</h2>
            <CardEnTuRegion img={'https://cds-landing.s3.sa-east-1.amazonaws.com/metropolitana_7ec6277087.png'} title={'Metropolitana'} url="Metropolitana" />
            <CardEnTuRegion img={'https://cds-landing.s3.sa-east-1.amazonaws.com/valparaiso_d2d021f6b3.png'} title={'de Valparaíso'} url="Valparaíso" />
            <CardEnTuRegion img={'https://cds-landing.s3.sa-east-1.amazonaws.com/los_lagos_66f805f42e.png'} title={'de los Lagos'} url="Los Lagos" />
            <Link href="/seguro-automotriz-en">
                <div className="boton-ver-mas">
                    Ver más Regiones
                </div>
            </Link>
        </div>
    )
}