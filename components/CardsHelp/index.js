import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export const CardsHelp = () => {
    return (
        <div className="root-cards-help">
            <div className="cards-help">
                <Link to="/asistencias" className="card-help card-help-title asistencia-img" >
                    <span>Asistencias</span>
                </Link>
                <Link to="/faq" className="card-help card-help-title faq-img" >
                    <span>Preguntas Frecuentes</span>
                </Link>
            </div>
            <Link to="/contacto" className="card-contacto-help card-help-title contacto-img" >
                <span>Contacto</span>
            </Link>
        </div>
    )
}