import React from 'react';
import { quitarAcentos } from '../../utils/constants';

export const CardModel = ({ name, brand }) => {
    let model = quitarAcentos(name);
    model = model.replace(" ", "_").toLowerCase();
    let brandName = quitarAcentos(brand);
    brandName = brandName.replace(" ", "_").toLowerCase();
    const link = `https://cotizador.clubdelseguro.cl/seguro-marca-modelo/${brandName}/${model}/`
    return (
        <a href={link} className="root-card-model" rel="noreferrer" target="_blank">
            <h2 className="title-card-model">{name}</h2>
        </a>
    )
}
