import Link from 'next/link';
import * as React from 'react';
import { Button, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { styled } from '@mui/material/styles';
/* import { useRouter } from 'next/router'; */

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
}));

const useStyles = makeStyles(theme => ({
    button: {
        width: '150px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s, color 0.3s',
        overflow: 'hidden',
    },
    icon: {
        fontSize: '40px',
        transition: 'transform 1s ease-in-out, opacity 0.3s',
    },
    text: {
        marginTop: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        transition: 'opacity 0.3s',
    },
    hiddenText: {
        opacity: 0,
    },
    flyingIcon: {
        animation: `$flyAnimation 1.5s ease-in-out forwards`,
    },
    '@keyframes flyAnimation': {
        '0%': { transform: 'translateY(100px)', opacity: 1 },
        '100%': { transform: 'translateY(-100px)', opacity: 1 },
    },
    drivingIcon: {
        animation: `$driveAnimation 1.5s ease-in-out forwards`,
    },
    '@keyframes driveAnimation': {
        '0%': { transform: 'translateX(-100px)', opacity: 1 },
        '100%': { transform: 'translateX(100px)', opacity: 1 },
    },
}));

export const MasSeguros = () => {

    const classes = useStyles();
    const [isFlying, setIsFlying] = React.useState(false);
    const [isDriving, setIsDriving] = React.useState(false);
    /* const router = useRouter(); */

    const handleAirplaneClick = () => {
        setIsFlying(true);
        setTimeout(() => {
            setIsFlying(false);
            window.open('https://asistencia.seguroenviaje.com/Administracion/Seguro/A76215627K1044', '_blank')
        }, 1500);
        /* router.push('/asistencia-de-viajes') */
    };

    const handleWheelClick = () => {
        setIsDriving(true);
        setTimeout(() => setIsDriving(false), 1500);
    };

    return (
        <div className="root-quienes-respaldan">
            <p className="title-quienes-respaldan">
                Otros <b> seguros </b>
            </p>
            <Grid
                xs={12}
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item>
                    <CustomButton
                        className={classes.button}
                        onClick={handleAirplaneClick}
                    >
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <LocalAirportIcon
                                className={`${classes.icon} ${isFlying ? classes.flyingIcon : ''
                                    }`}
                            />
                            <span
                                className={`${classes.text} ${isFlying ? classes.hiddenText : ''
                                    }`}
                            >
                                Seguro de viajes
                            </span>
                        </Grid>
                    </CustomButton>
                </Grid>
                {/* <Grid item>
                    <CustomButton className={classes.button} onClick={handleWheelClick}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <AirportShuttleIcon
                                className={`${classes.icon} ${isDriving ? classes.drivingIcon : ''
                                    }`}
                            />
                            <span
                                className={`${classes.text} ${isDriving ? classes.hiddenText : ''
                                    }`}
                            >
                                SOAP
                            </span>
                        </Grid>
                    </CustomButton>
                </Grid> */}
            </Grid>
            {/* <Link href="/aseguradoras" >
                <p className="ver-mas-quienes-respaldan">
                    Ver todos los seguros
                </p>
            </Link> */}
        </div>
    )
}
