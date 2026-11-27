import React from 'react';
import { TopBar } from '../../components/NavBar/TopBar';

export default function Header({ title, description }) {
    return (
        <div className="root-header-home">
            <a
                href="https://cotizador.clubdelseguro.cl/"
                className="hero-banner-home"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src="/assets/black-club-days-banner.jpg"
                    alt="Black Club Days: hasta 40% de descuento en tu seguro automotriz. Del 27 al 30 de noviembre. Cotiza 100% online."
                />
            </a>
            <div className="body">
                <TopBar centerSocial />
                <div className="container-header-home">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 className="title-header-home">{title}</h1>
                        <p className="description-header-home">{description}</p>
                        <a href="https://cotizador.clubdelseguro.cl/" className="cotiza-ahora-header-home" target="_blank" rel="noreferrer">
                            Cotiza ahora
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
