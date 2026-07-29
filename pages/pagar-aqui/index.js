'use client';
import { NavBar } from '../../components/NavBar';
import { useState } from 'react';
import { TextField } from '@mui/material';

// ─── Iconos ───────────────────────────────────────────────────────────────────

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const DocumentIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#FF521B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" stroke="#FF521B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="#FF521B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="#FF521B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const AlertTriangleIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#FFF3CD" stroke="#FFC107" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="12" y1="9" x2="12" y2="13" stroke="#E6A800" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="#E6A800" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#bbb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// ─── Componente ───────────────────────────────────────────────────────────────

function ConsultaDocumentos() {
    const [rut, setRut] = useState('');
    const [propuestas, setPropuestas] = useState(undefined); // undefined = sin consultar
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // ─── RUT helpers ─────────────────────────────────────────────────────────

    const formatearRut = (value) => {
        let rutLimpio = value.replace(/[^0-9kK]/g, '').toUpperCase();
        if (rutLimpio.length <= 1) return rutLimpio;
        const dv = rutLimpio.slice(-1);
        let cuerpo = rutLimpio.slice(0, -1);
        cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `${cuerpo}-${dv}`;
    };

    const validarRut = (rutCompleto) => {
        const rutLimpio = rutCompleto.replace(/\./g, '').replace('-', '');
        if (rutLimpio.length < 8) return false;
        const cuerpo = rutLimpio.slice(0, -1);
        let dv = rutLimpio.slice(-1).toUpperCase();
        let suma = 0;
        let multiplo = 2;
        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += multiplo * parseInt(cuerpo.charAt(i));
            multiplo = multiplo < 7 ? multiplo + 1 : 2;
        }
        const dvEsperado = 11 - (suma % 11);
        let dvFinal = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
        return dvFinal === dv;
    };

    const handleRutChange = (e) => {
        const valorFormateado = formatearRut(e.target.value);
        setRut(valorFormateado);
        if (valorFormateado.length > 3) {
            setError(validarRut(valorFormateado) ? '' : 'RUT no válido');
        } else {
            setError('');
        }
    };

    // ─── Consulta ────────────────────────────────────────────────────────────

    const consultar = async () => {
        setError('');
        setPropuestas(undefined);
        if (!rut.trim()) { setError('Debes ingresar un RUT'); return; }
        if (!validarRut(rut)) { setError('El RUT ingresado no es válido'); return; }
        try {
            setLoading(true);
            const rutLimpio = rut.replace(/\./g, '').replace(/-/g, '');
            const response = await fetch(
                `https://api.dev.clubdelseguro.cl/api/flowguru/getUrlPagarAqui/${rutLimpio}`
            );
            if (!response.ok) throw new Error(`HTTP_${response.status}`);
            const { object } = await response.json();
            setPropuestas(Array.isArray(object) ? object : []);
        } catch (err) {
            const esRed = err instanceof TypeError;
            setError(
                esRed
                    ? 'No pudimos conectarnos al servidor. Verifica tu conexión e intenta nuevamente.'
                    : 'Ocurrió un error al consultar. Por favor intenta nuevamente.'
            );
        } finally {
            setLoading(false);
        }
    };

    const volver = () => {
        setPropuestas(undefined);
        setRut('');
        setError('');
    };

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <style>{`
                @keyframes spin { to { transform: rotate(360deg); } }
                @media (max-width: 600px) {
                    .doc-input-row { flex-direction: column !important; }
                    .doc-input-row button { min-width: 100% !important; }
                    .doc-title { font-size: 26px !important; }
                    .doc-card-info { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
                }
            `}</style>
            <div className="root-header-error-page" />
            <NavBar />
            <div className="body">
                <div className="root-error-page" style={{ marginLeft: '10px', marginRight: '10px' }}>

                    {/* ══ FORMULARIO ══ */}
                    {propuestas === undefined && (
                        <div style={sd.formWrapper}>
                            {/* Ícono decorativo */}
                            <div style={{
                                width: '68px', height: '68px', borderRadius: '18px',
                                backgroundColor: '#fff5f0', border: '1.5px solid #ffd5c0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '20px',
                            }}>
                                <DocumentIcon />
                            </div>

                            <h1 style={sd.titulo} className="doc-title">
                                Paga tu <span style={{ color: '#FF521B' }}>póliza en línea</span>
                            </h1>
                            <p style={sd.subtitulo}>
                                Ingresa el RUT del asegurado y te mostraremos las propuestas disponibles para pagar en línea.
                            </p>

                            <div style={sd.inputGroup}>
                                <label style={sd.inputLabel}>RUT del asegurado</label>
                                <div style={sd.inputRow} className="doc-input-row">
                                    <TextField
                                        type="text"
                                        placeholder="Ej: 12.345.678-9"
                                        value={rut}
                                        onChange={handleRutChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !loading && rut.trim() && error !== 'RUT no válido') consultar();
                                        }}
                                        error={error === 'RUT no válido'}
                                        helperText={error === 'RUT no válido' ? error : ' '}
                                        fullWidth
                                        size="medium"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px', backgroundColor: '#fff', fontSize: '16px',
                                                '&.Mui-focused fieldset': { borderColor: '#FF521B', borderWidth: '2px' },
                                            },
                                        }}
                                    />
                                    <button
                                        onClick={consultar}
                                        disabled={loading || error === 'RUT no válido' || !rut.trim()}
                                        style={{
                                            ...sd.btnOrange,
                                            opacity: (loading || error === 'RUT no válido' || !rut.trim()) ? 0.55 : 1,
                                            cursor: (loading || error === 'RUT no válido' || !rut.trim()) ? 'not-allowed' : 'pointer',
                                            minWidth: '160px',
                                        }}
                                    >
                                        {loading ? (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={sd.spinner} /> Buscando...
                                            </span>
                                        ) : (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <SearchIcon /> Buscar
                                            </span>
                                        )}
                                    </button>
                                </div>

                                {/* Error de API */}
                                {error && error !== 'RUT no válido' && (
                                    <div style={sd.errorBanner}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                                            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round" />
                                            <line x1="12" y1="9" x2="12" y2="13" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="12" cy="17" r="1" fill="#b91c1c" />
                                        </svg>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#b91c1c' }}>Error al consultar</p>
                                            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#7f1d1d', lineHeight: '1.4' }}>{error}</p>
                                        </div>
                                        <button onClick={consultar} style={{ padding: '7px 12px', borderRadius: '8px', backgroundColor: '#b91c1c', color: '#fff', fontWeight: '700', fontSize: '12px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                            Reintentar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ══ SIN RESULTADOS ══ */}
                    {Array.isArray(propuestas) && propuestas.length === 0 && (
                        <div style={sd.sinResultados}>
                            <AlertTriangleIcon />
                            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1a1a1a', margin: 0 }}>
                                Sin propuestas de pago disponibles
                            </h2>
                            <p style={{ fontSize: '14px', color: '#666', textAlign: 'center', lineHeight: '1.6', maxWidth: '320px', margin: 0 }}>
                                No encontramos propuestas de pago asociadas al RUT <strong>{rut}</strong>.
                            </p>
                            <button onClick={volver} style={sd.btnGhost}>← Intentar con otro RUT</button>
                        </div>
                    )}

                    {/* ══ LISTA DE PROPUESTAS ══ */}
                    {Array.isArray(propuestas) && propuestas.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>

                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                                <div>
                                    <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                                        Propuestas disponibles para pagar
                                    </h2>
                                    <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>
                                        {propuestas.length} {propuestas.length === 1 ? 'propuesta encontrada' : 'propuestas encontradas'} para el RUT <strong>{rut}</strong>
                                    </p>
                                </div>
                                <button onClick={volver} style={sd.btnGhostSmall}>← Otro RUT</button>
                            </div>

                            {/* Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {propuestas.map((item) => (
                                    <a
                                        key={item.proposal}
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={sd.propuestaCard}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = '#FF521B';
                                            e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,82,27,0.12)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = '#e8e8e8';
                                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                                        }}
                                    >
                                        {/* Ícono */}
                                        <div style={sd.iconWrap}>
                                            <DocumentIcon />
                                        </div>

                                        {/* Info */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a', marginBottom: '3px' }}>
                                                Propuesta N° {item.proposal}
                                            </div>
                                            {(item.brand || item.model || item.year) && (
                                                <div style={{ fontSize: '13px', fontWeight: '600', color: '#555', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {[item.brand, item.model, item.year].filter(Boolean).join(' ')}
                                                </div>
                                            )}
                                            <div style={{ fontSize: '12px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <ExternalLinkIcon />
                                                Toca para ir al portal de pago
                                            </div>
                                        </div>

                                        {/* Chevron */}
                                        <ChevronRightIcon />
                                    </a>
                                ))}
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

// ─── Estilos ──────────────────────────────────────────────────────────────────

const sd = {
    formWrapper: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    },
    titulo: {
        fontSize: '32px', fontWeight: '900', color: '#1a1a1a',
        lineHeight: '1.25', marginBottom: '12px', letterSpacing: '-0.5px',
    },
    subtitulo: {
        fontSize: '15px', color: '#666', lineHeight: '1.6',
        maxWidth: '400px', marginBottom: '32px',
    },
    inputGroup: { width: '100%', maxWidth: '480px', textAlign: 'left' },
    inputLabel: { display: 'block', fontSize: '14px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' },
    inputRow: { display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' },
    errorBanner: {
        display: 'flex', alignItems: 'flex-start', gap: '10px',
        marginTop: '12px', padding: '12px 14px',
        backgroundColor: '#fef2f2', borderRadius: '10px', border: '1px solid #fecaca',
    },
    sinResultados: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px',
        backgroundColor: '#fff', borderRadius: '18px', padding: '40px 28px',
        border: '1px solid #e8e8e8', boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
        textAlign: 'center',
    },
    propuestaCard: {
        display: 'flex', alignItems: 'center', gap: '16px',
        backgroundColor: '#fff', borderRadius: '14px',
        border: '1px solid #e8e8e8', padding: '16px 20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        textDecoration: 'none', cursor: 'pointer',
        transition: 'box-shadow 0.15s, border-color 0.15s',
    },
    iconWrap: {
        width: '48px', height: '48px', borderRadius: '12px',
        backgroundColor: '#fff5f0', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    },
    btnOrange: {
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        height: '52px', padding: '0 22px', borderRadius: '12px',
        backgroundColor: '#FF521B', color: '#fff', fontSize: '15px',
        fontWeight: '700', border: 'none', cursor: 'pointer',
    },
    btnGhost: {
        backgroundColor: 'transparent', border: '1.5px solid #ddd',
        borderRadius: '10px', padding: '10px 20px',
        fontSize: '14px', fontWeight: '600', color: '#666', cursor: 'pointer',
    },
    btnGhostSmall: {
        backgroundColor: 'transparent', border: '1.5px solid #ddd',
        borderRadius: '8px', padding: '8px 14px',
        fontSize: '13px', fontWeight: '600', color: '#666',
        cursor: 'pointer', whiteSpace: 'nowrap',
    },
    spinner: {
        display: 'inline-block', width: '15px', height: '15px',
        border: '2px solid rgba(255,255,255,0.4)', borderTop: '2px solid #fff',
        borderRadius: '50%', animation: 'spin 0.7s linear infinite',
    },
};

export default ConsultaDocumentos;