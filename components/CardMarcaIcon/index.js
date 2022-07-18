import React from 'react';
import { Link } from 'react-router-dom';
import { quitarAcentos } from '../../utils/constants';
import './index.css';

export const CardMarcaIcon = ({ brand }) => {

    var name = quitarAcentos(brand.name);

    const respuesta = brand.logo?.url ? (<Link to={`/seguro-marca-modelo/${name}`} className="root-card-marca-icon">
        <div className="img-marca-card-marca-icon">
            <img loading="lazy" src={brand.logo.url} alt="Logo marca" />
        </div>
        <p className="nombre-marca-card-marca-icon">{brand.title}</p>
    </Link>) : (<Link to={`/seguro-marca-modelo/${name}`} className="root-card-marca-icon-title">
        <p className="nombre-marca-card-marca-icon">{brand.title}</p>
    </Link>)
    return respuesta;
}
