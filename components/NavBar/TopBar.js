import { makeStyles } from '@mui/styles';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
    containerTopBar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    elementSup: {
        width: '100%',
        maxWidth: '1060px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    logo: {
        backgroundColor: '#FFFFFF',
        width: '340px',
        padding: '15px 0px',
        borderRadius: '0px 0px 40px 40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    barNavigation: {
        width: '60%',
        minHeight: '47px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'end',
        borderRadius: '20px 0px 30px 20px',
    },
    barNavigation2: {
        width: '100%',
        height: '47px',
        background: 'linear-gradient(90deg, #000000 80%, #FFFFFF 20%)',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0px 0px 0px 20px'

    },
    item: {
        height: '100%',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item2: {
        height: '100%',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        width: '20%',
        borderRadius: '0px 0px 20px 0px',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none',
    },
    rrss: {
        width: '215px',
        height: '41px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '0px 0px 20px 20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
}));

export const TopBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.containerTopBar}>
            <div className={classes.elementSup}>
                <Link href="/" >
                    <div className={classes.logo}>
                        <img loading="lazy" src="/assets/Logo-CDS-Original.svg" alt="Logo CDS" />
                    </div>
                </Link>
                <div className={classes.barNavigation}>
                    <div className={classes.barNavigation2}>
                        <div className={classes.item} style={{ width: '10%', backgroundColor: '#000000', borderRadius: '0px 0px 0px 20px' }}>
                            <Link href="/">
                                <div className={classes.link} style={{ color: '#FFFFFF' }}>
                                    Inicio
                                </div>
                            </Link>
                        </div>
                        <div className={classes.item} style={{ width: '20%', backgroundColor: '#000000' }}>
                            <Link href="/quienes-somos" >
                                <div className={classes.link} style={{ color: '#FFFFFF' }}>
                                    Quienes somos
                                </div>
                            </Link>
                        </div>
                        <div className={classes.item} style={{ width: '20%', backgroundColor: '#000000' }}>
                            <Link href="/seguro-automotriz" >
                                <div className={classes.link} style={{ color: '#FFFFFF' }}>
                                    Seguro Automotriz
                                </div>
                            </Link>
                        </div>
                        <div className={classes.item} style={{ width: '10%', backgroundColor: '#000000' }}>
                            <Link href="/blog">
                                <div className={classes.link} style={{ color: '#FFFFFF' }}>
                                    Blog
                                </div>
                            </Link>
                        </div>
                        <div className={classes.item} style={{ width: '10%', backgroundColor: '#000000' }}>
                            <Link href="/ayuda">
                                <div className={classes.link} style={{ color: '#FFFFFF' }}>
                                    Ayuda
                                </div>
                            </Link>
                        </div>
                        <div className={classes.item} style={{ backgroundColor: '#F5F5F5', width: '20%' }}>
                            <a href="https://clubdelseguro.trytoku.com/" target="_blank" rel="noreferrer" className={classes.link} style={{ color: '#000000' }}>
                                Pagar Aqui
                            </a>
                        </div>
                        <div className={classes.item2} >
                            <a href="https://cotizador.clubdelseguro.cl/" target="_blank" rel="noreferrer" className={classes.link} style={{ color: '#000000' }}>
                                Cotiza Aqui
                            </a>
                        </div>
                    </div>
                    <div className={classes.rrss}>
                        <a href="https://www.instagram.com/clubdelsegurocl/" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '16.98px', height: '19.25px' }} src="/assets/logo-insta.svg" alt="logo insta" />
                        </a>
                        <a href="https://www.facebook.com/clubdelseguro.cl/" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '10.81px', height: '17px' }} src="/assets/logo-fb.svg" alt="logo fb" />
                        </a>
                        <a href="https://twitter.com/Club_Del_Seguro" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '12.27px', height: '16.5px' }} src="/assets/logo-twiter.svg" alt="logo twiter" />
                        </a>
                        <a className="rrss-a" href="tel:+6003001919" style={{ marginLeft: '11.1px', marginRight: '14.92px', height: '17px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '12px', lineHeight: '14px', textDecoration: 'none', color: '#000000' }}>
                            <img loading="lazy" style={{ height: '17px' }} src="/assets/logo-phone.svg" alt="logo phone" />
                            <span style={{ marginLeft: '14px' }}>6003001919</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
