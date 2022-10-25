import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { rutas } from '../../utils/constants';
import { Grid } from '@mui/material';
import Link from 'next/link';


export default function HeaderMovil() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {rutas.map((text, i) => (
                    <Link href={text.url} style={{ textDecoration: 'none', color: '#000000' }} key={i}>
                        <ListItem button key={text.id}>
                            <ListItemText primary={text.name} />
                        </ListItem>
                    </Link>
                ))}
                <a href="https://clubdelseguro.trytoku.com/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemText primary="Pagar Aqui" />
                    </ListItem>
                </a>
                <a href="https://cotizador.clubdelseguro.cl/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemText primary="Cotiza Aqui" />
                    </ListItem>
                </a>
            </List>
            <Divider />
        </Box>
    );

    const anchor = 'top';

    return (
        <div className="root-header-movil-home">
            <AppBar className="header-movil-home" style={{ height: '430px', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'none', maxWidth: '1060px', borderBottom: 'solid 1px #FFFFFF', padding: 0, margin: 0 }} position="static" color="transparent">
                <div style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)' }}>
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Link href="/">
                                <img loading="lazy" src="/assets/logo-CDS-Blanco.svg" alt="Icono" />
                            </Link>

                            <div style={{
                                backgroundColor: '#FFFFFF',
                                width: '42.05px',
                                height: '35px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '6px'
                            }}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="primary"
                                    aria-label="menu"
                                    style={{ margin: 0, padding: 0 }}
                                    sx={{ mr: 2 }}
                                    onClick={toggleDrawer(anchor, true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div>

                        </Grid>
                    </Toolbar>
                </div>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </AppBar>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="container-header-movil-home">
                    <h1 className="title-header-home">Bienvenidos al Club del seguro</h1>
                    <h3 className="description-header-home">Te asesoramos para encontrar la mejor opción para el seguro de tu auto.</h3>
                    <a href="https://cotizador.clubdelseguro.cl/" target="_blank" rel="noreferrer">
                        <div className="cotiza-ahora-seguro-automotriz">
                            Cotiza ahora
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
