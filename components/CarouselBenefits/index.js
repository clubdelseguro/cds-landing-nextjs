import React from 'react';
import { makeStyles } from '@mui/styles';
import { CardsBeneficio } from '../../components/CardsBeneficio'
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1,
        pagination: false
    },
    {
        width: 500,
        itemsToShow: 2
    },
    {
        width: 750,
        itemsToShow: 3
    },
    {
        width: 1000,
        itemsToShow: 4
    },
]

const useStyles = makeStyles(theme => ({
    cardsBeneficio: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#000000',
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
        margin: '20px 0px 60px 0px',
    }
}));


export const CarouselBenefits = ({ beneficios }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.cardsBeneficio}>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                    {
                        beneficios?.map((beneficio) => (
                            <CardsBeneficio key={beneficio.id} beneficio={beneficio} />
                        ))
                    }
                </Carousel>
                <div className={classes.bottom}>
                    <Link href="/asistencias" style={{ textDecoration: 'none' }}>
                        <div className={classes.button}>Ver todos los beneficios</div>
                    </Link>
                </div>
            </div>
        </>
    )
}
