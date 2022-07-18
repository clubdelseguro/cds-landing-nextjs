import React from 'react';
import { Link } from 'react-router-dom';
import { quitarAcentos } from '../../utils/constants';
import './index.css';

export const CardRegion = ({region}) => {
    var name = quitarAcentos(region?.title);
    return (
        <Link to={`/seguro-automotriz-en/region-${name}`} className="root-card-region">
            <h2 className="title-card-region">Región {region?.title}</h2>
        </Link>
    )
}
