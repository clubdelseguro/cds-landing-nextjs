import React from 'react';
import { TopBar } from './TopBar';
import { TopBarMovil } from './TopBarMovil';
import './index.css'

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="topbar-header">
                <TopBar />
            </div>
            <div className="topbarmovil-header" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)' }}>
                <TopBarMovil />
            </div>
        </div>
    )
}
