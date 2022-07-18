import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        margin: '2% 0%',
    },
    container: {
        backgroundColor: '#F0EBEB',
        borderRadius: '40px',
        padding: '4% 0%'
    },
    elements: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-around',
    },
    element: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2% 0%'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px'
    },
    description: {
        fontWeight: '300',
        fontSize: '15px',
        lineHeight: '20px'
    }
});


export const Cargos = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} className={classes.element}>
                        <img loading="lazy" src="/assets/quienes-somos/ic_baseline-person-pin.svg" alt="Icon circle person" />
                        <div className={classes.content}>
                            <span className={classes.title}>Nombre Apellido</span>
                            <span className={classes.description}>Cargo</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.element}>
                        <img loading="lazy" src="/assets/quienes-somos/ic_baseline-person-pin.svg" alt="Icon circle person" />
                        <div className={classes.content}>
                            <span className={classes.title}>Nombre Apellido</span>
                            <span className={classes.description}>Cargo</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.element}>
                        <img loading="lazy" src="/assets/quienes-somos/ic_baseline-person-pin.svg" alt="Icon circle person" />
                        <div className={classes.content}>
                            <span className={classes.title}>Nombre Apellido</span>
                            <span className={classes.description}>Cargo</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.element}>
                        <img loading="lazy" src="/assets/quienes-somos/ic_baseline-person-pin.svg" alt="Icon circle person" />
                        <div className={classes.content}>
                            <span className={classes.title}>Nombre Apellido</span>
                            <span className={classes.description}>Cargo</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.element}>
                        <img loading="lazy" src="/assets/quienes-somos/ic_baseline-person-pin.svg" alt="Icon circle person" />
                        <div className={classes.content}>
                            <span className={classes.title}>Nombre Apellido</span>
                            <span className={classes.description}>Cargo</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.element}>
                        <img loading="lazy" src="/assets/quienes-somos/ic_baseline-person-pin.svg" alt="Icon circle person" />
                        <div className={classes.content}>
                            <span className={classes.title}>Nombre Apellido</span>
                            <span className={classes.description}>Cargo</span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}