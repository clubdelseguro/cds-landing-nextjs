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
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const rutas = [
    {
        id: 1,
        name: 'Inicio',
        url: '/'
    },
    {
        id: 2,
        name: 'Quienes Somos',
        url: '/quienes-somos'
    },
    {
        id: 4,
        name: 'Seguro automotriz',
        url: '/seguro-automotriz'
    },
    {
        id: 3,
        name: 'Contacto',
        url: '/contacto'
    },
]

export const HeaderMovil = () => {
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
                    <Link to={text.url} style={{ textDecoration: 'none', color: '#000000' }} key={i}>
                        <ListItem button key={text.id}>
                            <ListItemText primary={text.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </Box>
    );

    const anchor = 'top';

    return (
        <div style={{ width: '100%' }}>
            <AppBar style={{ height: '385px', backgroundSize: 'cover', backgroundImage: 'url(/assets/Error/img-error.svg)', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'none', maxWidth: '1060px', borderBottom: 'solid 1px #FFFFFF', padding: 0, margin: 0 }} position="static" color="transparent">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Link to="/">
                            <img loading="lazy" src="/assets/Logo 2023 CDS Blanco Transparente.svg" width="150px" alt="Icono" />
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
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
                <div style={{ backgroundColor: '#FFFFFF', height: '27px', margin: '0px 27px', borderRadius: '25px 25px 0px 0px', padding: 0 }}>

                </div>
            </AppBar>
        </div>
    );
}
