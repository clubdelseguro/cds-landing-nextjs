import React from 'react';
import { TopBar } from '../../components/NavBar/TopBar';

export default function Header() {
    return (
        <div className="root-header-home">
            <div className="body">
                <TopBar />
                <div className="container-header-home">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 className="title-header-home">Bienvenidos al Club del seguro</h1>
                        <h3 className="description-header-home">Te asesoramos para encontrar la mejor opción para el seguro de tu auto.</h3>
                        <a href="https://cotizador.clubdelseguro.cl/" className="cotiza-ahora-header-home" target="_blank" rel="noreferrer">
                            Cotiza ahora
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
