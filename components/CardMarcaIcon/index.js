import Link from 'next/link';
import React from 'react';
import { quitarAcentos } from '../../utils/constants';

export const CardMarcaIcon = ({ brand }) => {

    var name = quitarAcentos(brand.name);

    const respuesta = brand.logo?.url ? (
        <Link href={`/seguro-para-marca/${name}`}>
            <div className="root-card-marca-icon">
                <div className="img-marca-card-marca-icon">
                    <img loading="lazy" src={brand.logo.url} alt="Logo marca" />
                </div>
                <p className="nombre-marca-card-marca-icon">{brand.title}</p>
            </div>
        </Link>
    ) : (
        <Link href={`/seguro-para-marca/${name}`}>
            <div className="root-card-marca-icon-title">
                <p className="nombre-marca-card-marca-icon">{brand.title}</p>
            </div>
        </Link>
    )
    return respuesta;
}
