import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { HeaderMovil } from './HeaderMovil';
import { Hidden } from '@mui/material';
import { PageService } from '../../services/PageService';
import { MetaTags } from 'react-meta-tags';

export const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <MetaTags>
                <title> Club del Seguro</title>
                <meta name="description" />
            </MetaTags>
            <Hidden only={['xs', 'sm']}>
                <Header  />
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
                <HeaderMovil />
            </Hidden>
            <div className="body">
                <Body />
            </div>
        </div>
    )
}
