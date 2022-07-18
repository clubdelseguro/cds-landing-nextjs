import React from 'react';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1
    },
    {
        width: 600,
        itemsToShow: 2
    },
    {
        width: 900,
        itemsToShow: 3,
        pagination: false
    },
]

const useStyles = makeStyles({
    root: {
        margin: '2% 0%',
    },
    container: {
        height: '100px',
        margin: '2% 0%',
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0px 40px'
    },
    titleElement: {
        fontWeight: '300',
        fontSize: '48px',
        lineHeight: '56px',
        textAlign: 'center',
    },
    description: {
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        textAlign: 'center',
    },
    containerBeneficios: {
        margin: '30px 0px',
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        margin: '2% 0%'
    },
    card: {
        width: '300px',
        height: '200px',
        border: '1px solid #000000',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '2% 0%',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
    },
    cardDescription: {
        fontWeight: '300',
        fontSize: '13px',
        lineHeight: '15px',
        textAlign: 'center',
        margin: '0% 5%',
    },
    cardIcon: {
        height: '74px',
        width: '74px',
    },
    title: {
        fontWeight: '300',
        fontSize: '48px',
        lineHeight: '56px',
        textAlign: 'center',
    },
    cardsBeneficio: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
});

export const ActivaTusBeneficiosPasos = () => {
    const classes = useStyles();
    return (
        <div className={classes.containerBeneficios}>
            <h2 className={classes.title}>Activa tus beneficios</h2>
            <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                <div className={classes.card}>
                    <div>
                        <img loading="lazy" className={classes.cardIcon} src="/assets/Beneficios/icon-exclamacion.svg" alt="Like Icon" />
                    </div>
                    <span className={classes.cardTitle}> Paso 1 </span>
                    <span className={classes.cardDescription}>
                        Llama al 600 300 1919 y selecciona la opción 1.
                    </span>
                </div>
                <div className={classes.card}>
                    <div>
                        <img loading="lazy" className={classes.cardIcon} src="/assets/Beneficios/icon-flecha-abajo.svg" alt="Like Icon" />
                    </div>
                    <span className={classes.cardTitle}> Paso 2 </span>
                    <span className={classes.cardDescription}>
                        Un ejecutivo de nuestro equipo le solicitará el RUT del asegurado.
                    </span>
                </div>
                <div className={classes.card}>
                    <div>
                        <img loading="lazy" className={classes.cardIcon} src="/assets/Beneficios/icon-carrito.svg" alt="Like Icon" />
                    </div>
                    <span className={classes.cardTitle}> Paso 3 </span>
                    <span className={classes.cardDescription}>
                        Solicita la asistencia que necesitas.
                    </span>
                </div>
            </Carousel>
        </div>
    )
}
