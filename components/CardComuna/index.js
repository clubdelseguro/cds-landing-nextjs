import React from 'react';
import { quitarAcentos } from '../../utils/constants';
/* import './index.css'; */

export const CardComuna = ({ name, region }) => {
    let commune = quitarAcentos(name);
    commune = commune.replace(" ","_").toLowerCase();
    let regionName = quitarAcentos(region);
    regionName = region.replace(" ","_").toLowerCase();
    const link = `https://cotizador.clubdelseguro.cl/seguro-automotriz-en/region-de-${regionName}/${commune}/`
    return (
        <a href={link} className="root-card-comuna" rel="noreferrer" target="_blank" >
            <h2 className="title-card-comuna">{name}</h2>
        </a>
    )
}
