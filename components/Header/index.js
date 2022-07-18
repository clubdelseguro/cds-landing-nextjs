import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '440px',
        backgroundImage: 'url(/assets/img-inicio.svg)',
        backgroundRepeat: 'no-repeat',
    },
    containerLogo: {
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        backgroundColor: '#FFFFFF',
        width: '340px',
        padding: '15px 0px',
        borderRadius: '0px 0px 40px 40px'
    },
    content: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0px',
        top: '0px',
        height: '440px',
        borderRadius: '40px',
    },
    containerContent: {
        width: '50%',
        backgroundColor: '#FFFFFF',
        borderRadius: '40% 0px 0px 0px'
    },
    containerTitle: {
        fontWeight: 'bold',
        fontSize: '45px',
        lineHeight: '56px',
        textAlign: 'center',
        color: '#000000',
    },
    containerDescription: {
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        textAlign: 'center',
        color: '#000000',
    },
    divContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '88%',
    },
    menu: {
        width: '490px',
        height: '47px',
        backgroundColor: '#000000',
        borderRadius: '20px 0px 20px 20px'
    },
    itemsMenu: {
        color: "#FFFFFF",
    }
});

export const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.containerLogo}>
                <div className={classes.logo}>
                    <img loading="lazy" src="/assets/Logo-CDS-Original.svg" alt="Logo CDS" />
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.containerContent}>
                    <div className={classes.menu}>
                        <span className={classes.itemsMenu}>Inicio</span>
                        <span className={classes.itemsMenu}>Quienes Somos</span>
                        <span className={classes.itemsMenu}>Seguro Automotriz</span>
                        <span className={classes.itemsMenu}>Blog</span>
                        <span className={classes.itemsMenu}>Pagar Aqui</span>
                        <span className={classes.itemsMenu}>Cotiza Aqui</span>
                    </div>
                    <div className={classes.divContent}>
                        <div className={classes.containerTitle}>
                            <span>Bienvenidos al Club del seguro</span>
                        </div>
                        <div className={classes.containerDescription}>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sagittis enim gravida odio
                                sit id consequat tempus venenatis metus.</span>
                        </div>
                        <div>
                            <Button variant="contained" style={{ backgroundColor: '#FC8100', borderRadius: '20px' }}>
                                Cotiza ahora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
