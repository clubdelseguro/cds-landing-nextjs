import Link from 'next/link';
import React from 'react';
import { quitarAcentos } from '../../utils/constants';
/* import './index.css'; */

export const CardRegion = ({ region }) => {
    var name = quitarAcentos(region?.title);
    return (
        <Link href={`/seguro-automotriz-en/region-${name}`} >
            <div className="root-card-region">
                <h2 className="title-card-region">Región {region?.title}</h2>
            </div>
        </Link>
    )
}
