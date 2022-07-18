import React from 'react';
import { Link } from 'react-router-dom';
import { quitarAcentos } from '../../utils/constants';
import './index.css';

export const CardEnTuRegion = ({ img, title, url }) => {
    url = `region-${quitarAcentos(title)}`
    return (
        <Link to={`/seguro-automotriz-en/${url}`} className="card-en-tu-region" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`, backgroundPosition: 'center' }}>
            <h2 className="title-card-en-tu-region">Región {title}</h2>
        </Link>
    )
}
