import Link from 'next/link';
import React from 'react';
import { quitarAcentos } from '../../utils/constants';

export const CardEnTuRegion = ({ img, title, url }) => {
    url = `region-${quitarAcentos(title)}`
    return (
        <Link href={`/seguro-automotriz-en/${url}`} >
            <div className="card-en-tu-region" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`, backgroundPosition: 'center' }}>
                <h2 className="title-card-en-tu-region">Región {title}</h2>
            </div>
        </Link>
    )
}
