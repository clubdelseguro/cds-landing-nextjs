import React from 'react';
import { makeStyles } from '@mui/styles';
import { CardHowToQuote } from '../CardHowToQuote';
import Carousel from 'react-elastic-carousel';

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

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '20px',
        color: '#FFFFFF',
        width: '228px',
        height: '46px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        lineHeight: '21px',
        fontWeight: 'bold'
    },
    bottom: {
        margin: '30px',
    }
}));

export const HowToQuote = () => {
    const classes = useStyles();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="root-how-to-quote">
                <h2 className="title-how-to-quote">Cómo cotizar</h2>
            </div>
            <Carousel breakPoints={breakPoints} enableAutoPlay showArrows={false} autoPlaySpeed={5000} >
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
            </Carousel>

            <div className={classes.bottom}>
                <a href="https://cotizador.clubdelseguro.cl/" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                    <div className={classes.button}>
                        Iniciar mi cotización
                    </div>
                </a>
            </div>
        </div>
    )
}
