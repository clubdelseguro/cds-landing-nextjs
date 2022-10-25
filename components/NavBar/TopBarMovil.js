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

export const TopBarMovil = () => {
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
        <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
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
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
        </AppBar>
    );
}
