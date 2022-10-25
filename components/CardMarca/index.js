import React from 'react';

export const CardMarca = ({img, oferta}) => {
    return (
        <div className="card-marcas">
            <div className="header-card-marcas">
                <img loading="lazy" src={img} alt="Logo" />
                <span className="text-header-card-marcas"> Oferta {oferta}</span>
            </div>
            <span className="body-card-marcas">
                Desde 30.000
            </span>
            <a href="https://cotizador.clubdelseguro.cl/" target="_blank" rel="noreferrer" className="footer-card-marcas">
                <span className="ver-mas-card-marcas">ver más</span>
            </a>
        </div>
    )
}
