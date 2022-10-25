import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { HeaderMovil } from './HeaderMovil';
import { Hidden } from '@mui/material';
import Head from 'next/head';

export const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Head>
                <title> Club del Seguro</title>
                <meta name="description" />
            </Head>
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
