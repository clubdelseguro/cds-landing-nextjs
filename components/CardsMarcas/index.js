import Link from 'next/link';
import React from 'react';
import { CardMarca } from '../CardMarca';

export const CardsMarcas = () => {
    return (
        <div className="cards-marcas">
            <h2 className="title-marcas">Seguro Automotriz para las principales marcas</h2>
            <CardMarca oferta="1" img="https://cds-landing.s3.sa-east-1.amazonaws.com/image_32_f06c0cf68d.png" />
            <CardMarca oferta="2" img="https://cds-landing.s3.sa-east-1.amazonaws.com/Group_294_87234f85a5.png" />
            <CardMarca oferta="3" img="https://cds-landing.s3.sa-east-1.amazonaws.com/layer1_3581e81f46.png" />
            <Link href="/seguro-para-marca">
                <div className="boton-ver-mas">
                    Ver más Marcas
                </div>
            </Link>
        </div>
    )
}