import React from 'react';
import { CardHowToQuote } from '../CardHowToQuote';
import Carousel from 'react-elastic-carousel';
import styles from '../../styles/components/HowToQuote.module.css';
import Link from 'next/link';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1,
    },
    {
        width: 640,
        itemsToShow: 2
    },
    {
        width: 960,
        itemsToShow: 3
    },
    {
        width: 1000,
        itemsToShow: 4,
        pagination: false,
    },
]

const elements = [
    {
        id: 1,
        icon: '/assets/msg-icon.svg',
        step: 'Paso 1',
        text: 'Ingresa a nuestro cotizador online y llena los datos solicitados.'
    },
    {
        id: 2,
        icon: '/assets/hoja-icon.svg',
        step: 'Paso 2',
        text: 'Obtendrás todas las alternativas de seguros disponibles para ti.'
    },
    {
        id: 3,
        icon: '/assets/ampolleta-icon.svg',
        step: 'Paso 3',
        text: 'Elige el seguro que más se acomode a tus necesidades y las de tu vehículo.'
    },
    {
        id: 4,
        icon: '/assets/like-icon.svg',
        step: 'Paso 4',
        text: 'Contrata tu seguro automotriz y ¡se parte del Club más grande de Chile!'
    },
]

export const HowToQuote = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="root-how-to-quote">
                <h2 className="title-how-to-quote">¡Tuvisate un siniestro o una falla mecánica!</h2>
                <h3 style={{
                    margin: '10px',
                    fontSize: '40px',
                    fontWeight: '800',
                    lineHeight: '47px',
                    textAlign: 'center',
                    color: '#FF521B'
                }}>Consulta tu póliza ya,</h3>
                <h3 style={{
                    margin: '10px',
                    fontSize: '40px',
                    fontWeight: '800',
                    lineHeight: '47px',
                    textAlign: 'center',
                }}>para obtener ayuda</h3>
            </div>
            {/* <Carousel breakPoints={breakPoints} enableAutoPlay showArrows={false} autoPlaySpeed={5000} >
                {
                    elements.map((val, i) => (
                        <div key={val.id} className="container-cards-how-to-quote">
                            <CardHowToQuote val={val} />
                            {
                                i < 3 && (<div className="flecha-how-to-quote">
                                    <img loading="lazy" src="/assets/flecha-icon.svg" alt="Flecha Icon" />
                                </div>)
                            }
                        </div>
                    ))
                }
            </Carousel> */}

            <div className={styles.bottom}>
                <Link href="/ver-mi-poliza" style={{ textDecoration: 'none' }}>
                    <div className={styles.button}>
                        Ver mi póliza
                    </div>
                </Link>
            </div>
        </div >
    )
}
