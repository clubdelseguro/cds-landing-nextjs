'use client';
import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import { useState } from 'react';
import { TextField } from '@mui/material';

const CheckIcon = ({ color = '#FF521B', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="11" cy="11" r="11" fill={color} />
        <path d="M6 11.5L9.5 15L16 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const PhoneIcon = ({ size = 17 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.5 14.1 14.9 14 15.3 14.2C16.6 14.6 18 14.9 19.5 14.9C20.3 14.9 21 15.6 21 16.4V19.5C21 20.3 20.3 21 19.5 21C10.4 21 3 13.6 3 4.5C3 3.7 3.7 3 4.5 3H7.6C8.4 3 9.1 3.7 9.1 4.5C9.1 6 9.4 7.4 9.8 8.7C10 9.1 9.9 9.5 9.6 9.8L6.6 10.8Z" fill="currentColor" />
    </svg>
);
const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="currentColor" />
        <path d="M5 20H19V18H5V20Z" fill="currentColor" />
    </svg>
);
const WhatsAppIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);
const ExternalLinkIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
const AlertTriangleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#FFF3CD" stroke="#FFC107" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="12" y1="9" x2="12" y2="13" stroke="#E6A800" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="#E6A800" />
    </svg>
);
const CarIcon = ({ color = '#FF521B', size = 26 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M5 17H3v-5l2-5h14l2 5v5h-2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="17.5" r="1.5" fill={color} />
        <circle cx="16.5" cy="17.5" r="1.5" fill={color} />
        <path d="M5 12h14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const ChevronRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#bbb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ShieldAlertIcon = ({ color = '#FF521B', size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="12" y1="8" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1" fill={color} />
    </svg>
);
const WrenchIcon = ({ color = '#2563eb', size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ShieldCheckIcon = ({ color = '#16a34a', size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ShieldOffIcon = ({ color = '#999', size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M19.69 14A6.9 6.9 0 0020 12V5l-8-3-3.16 1.18" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="1" y1="1" x2="23" y2="23" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const InfoCircleIcon = ({ color = '#2563eb', size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" />
        <line x1="12" y1="16" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="8" r="1" fill={color} />
    </svg>
);
const CalendarIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#888" strokeWidth="1.8" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="#888" strokeWidth="1.8" />
    </svg>
);
const PlateIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="#888" strokeWidth="1.8" />
        <line x1="7" y1="10" x2="17" y2="10" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="14" x2="17" y2="14" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const BuildingIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="1" stroke="#888" strokeWidth="1.8" />
        <path d="M9 21V12h6v9" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="7" y="6" width="3" height="3" stroke="#888" strokeWidth="1.5" />
        <rect x="14" y="6" width="3" height="3" stroke="#888" strokeWidth="1.5" />
    </svg>
);
const HashIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <line x1="4" y1="9" x2="20" y2="9" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="4" y1="15" x2="20" y2="15" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="10" y1="3" x2="8" y2="21" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="3" x2="14" y2="21" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
const FileEditIcon = ({ size = 20, color = '#d97706' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <polyline points="10 9 9 9 8 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
    activa: { label: 'Activa', bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' },
    renunciada: { label: 'Renunciada', bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
    pendiente: { label: 'Pendiente', bg: '#fffbeb', color: '#d97706', border: '#fde68a' },
};
const getStatus = (status = '') => {
    const key = status.toLowerCase();
    return STATUS_CONFIG[key] || { label: status, bg: '#f3f4f6', color: '#666', border: '#e5e7eb' };
}; */

const getGuaranteeType = (guarantee = '') => {
    const g = guarantee.toLowerCase().trim();
    if (g.includes('total')) return 'total';
    if (g.includes('mecanica') || g.includes('mecánica')) return 'mecanica';
    return 'sin';
};

// ─── Componente principal ─────────────────────────────────────────────────────

function Siniestro() {
    const [rut, setRut] = useState('');
    const [propuestas, setPropuestas] = useState(undefined);
    const [propuestaSeleccionada, setPropuestaSeleccionada] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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

    const consultarPoliza = async () => {
        setError('');
        setPropuestas(undefined);
        setPropuestaSeleccionada(null);
        if (!rut.trim()) { setError('Debes ingresar un RUT'); return; }
        if (!validarRut(rut)) { setError('El RUT ingresado no es válido'); return; }
        try {
            setLoading(true);
            const rutLimpio = rut.replace(/\./g, '').replace('-', '');
            const response = await fetch(
                `https://api.clubdelseguro.cl/api/flowguru/getProposalsByRutOrPatentViewLanding/${rutLimpio}`
            );
            if (!response.ok) throw new Error(`HTTP_${response.status}`);
            const data = await response.json();
            const lista = Array.isArray(data) ? data : [];
            setPropuestas(lista);
            if (lista.length === 1) setPropuestaSeleccionada(lista[0]);
        } catch (err) {
            const esProblemaDeRed = err instanceof TypeError;
            setError(
                esProblemaDeRed
                    ? 'No pudimos conectarnos al servidor. Verifica tu conexión e intenta nuevamente.'
                    : 'Ocurrió un error al consultar tu póliza. Por favor intenta nuevamente.'
            );
        } finally {
            setLoading(false);
        }
    };

    const volverALista = () => setPropuestaSeleccionada(null);
    const volverAlFormulario = () => {
        setPropuestas(undefined);
        setPropuestaSeleccionada(null);
        setRut('');
        setError('');
    };
    const descargarPoliza = (url) => {
        if (!url) return;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'poliza.pdf');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="root-header-error-page" />
            <NavBar />
            <div className="body">
                <div className="root-error-page" style={{ marginLeft: '10px', marginRight: '10px' }}>

                    {/* ══ VISTA 1: FORMULARIO ══ */}
                    {propuestas === undefined && (
                        <div style={s.formWrapper}>
                            <h1 style={s.heroTitle}>
                                ¡Tuviste un <span style={s.orange}>siniestro</span> o<br />
                                una <span style={s.orange}>falla mecánica</span>!
                            </h1>
                            <p style={s.heroSub}>
                                Ingresa el RUT del asegurado y te mostramos toda la información de tu póliza al instante.
                            </p>
                            <div style={s.inputGroup}>
                                <label style={s.inputLabel}>RUT del asegurado</label>
                                <div style={s.inputRow}>
                                    <TextField
                                        type="text"
                                        placeholder="Ej: 12.345.678-9"
                                        value={rut}
                                        onChange={handleRutChange}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !loading && rut.trim() && error !== 'RUT no válido') consultarPoliza();
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
                                        onClick={consultarPoliza}
                                        disabled={loading || error === 'RUT no válido' || !rut.trim()}
                                        style={{
                                            ...s.btnOrange,
                                            opacity: (loading || error === 'RUT no válido' || !rut.trim()) ? 0.55 : 1,
                                            cursor: (loading || error === 'RUT no válido' || !rut.trim()) ? 'not-allowed' : 'pointer',
                                            minWidth: '180px',
                                        }}
                                    >
                                        {loading ? (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={s.spinner} /> Consultando...
                                            </span>
                                        ) : (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <SearchIcon /> Consultar póliza
                                            </span>
                                        )}
                                    </button>
                                </div>
                                {error && error !== 'RUT no válido' && (
                                    <div style={s.errorBanner}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                                            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round" />
                                            <line x1="12" y1="9" x2="12" y2="13" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="12" cy="17" r="1" fill="#b91c1c" />
                                        </svg>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#b91c1c' }}>Error al consultar</p>
                                            <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#7f1d1d', lineHeight: '1.4' }}>{error}</p>
                                        </div>
                                        <button onClick={consultarPoliza} style={{ padding: '8px 14px', borderRadius: '8px', backgroundColor: '#b91c1c', color: '#fff', fontWeight: '700', fontSize: '13px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                            Reintentar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* ══ VISTA 2A: SIN RESULTADOS ══ */}
                    {Array.isArray(propuestas) && propuestas.length === 0 && !propuestaSeleccionada && (
                        <div style={s.sinDatosWrapper}>
                            <AlertTriangleIcon />
                            <h2 style={{ ...s.sectionTitle, textAlign: 'center', marginBottom: '4px' }}>Sin póliza registrada</h2>
                            <p style={{ color: '#666', fontSize: '15px', textAlign: 'center', lineHeight: '1.6', maxWidth: '360px', margin: 0 }}>
                                No encontramos pólizas asociadas al RUT <strong>{rut}</strong> en nuestro sistema.
                            </p>
                            <a href="https://cotizador.clubdelseguro.cl/" style={{ ...s.btnOrange, textDecoration: 'none', marginTop: '4px' }}>
                                Contratar seguro ahora
                            </a>
                            <button onClick={volverAlFormulario} style={s.btnGhost}>← Intentar con otro RUT</button>
                        </div>
                    )}

                    {/* ══ VISTA 2B: LISTA DE PROPUESTAS ══ */}
                    {Array.isArray(propuestas) && propuestas.length > 1 && !propuestaSeleccionada && (
                        <div style={s.resultadoWrapper}>
                            <div style={s.resultHeader}>
                                <div>
                                    <h1 style={{ ...s.heroTitle, fontSize: '24px', textAlign: 'left', marginBottom: '6px' }}>Tus pólizas</h1>
                                    <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
                                        {propuestas.length} propuestas encontradas para el RUT <strong>{rut}</strong>
                                    </p>
                                </div>
                                <button onClick={volverAlFormulario} style={s.btnGhostSmall}>← Otro RUT</button>
                            </div>
                            <div style={s.tipCard}>
                                <InfoCircleIcon color="#2563eb" size={16} />
                                <span style={{ fontSize: '13px', color: '#2563eb' }}>
                                    Selecciona una póliza para ver todos sus detalles y opciones de asistencia.
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {propuestas.map((p) => {
                                    /* const st = getStatus(p.status); */
                                    const gt = getGuaranteeType(p.guarantee);
                                    return (
                                        <button
                                            key={p.propuesta}
                                            onClick={() => setPropuestaSeleccionada(p)}
                                            style={s.propuestaCard}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF521B'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,82,27,0.12)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
                                        >
                                            <div style={s.propuestaIconWrap}><CarIcon color="#FF521B" size={26} /></div>
                                            <div style={{ flex: 1, textAlign: 'left' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                                                    <span style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a' }}>{p.brand} {p.model}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '5px' }}>
                                                    <span style={s.metaItem}><CalendarIcon /> {p.year}</span>
                                                    {p.patent && <span style={s.metaItem}><PlateIcon /> {p.patent}</span>}
                                                    <span style={s.metaItem}><BuildingIcon /> {p.company}</span>
                                                </div>
                                                <div style={{ marginBottom: '5px' }}>
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#aaa', fontWeight: '600' }}>
                                                        <HashIcon size={11} /> Propuesta N° {p.propuesta}
                                                    </span>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    {gt === 'total' && <><ShieldCheckIcon color="#16a34a" size={14} /><span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '600' }}>Garantía Total</span></>}
                                                    {gt === 'mecanica' && <><WrenchIcon color="#2563eb" size={14} /><span style={{ fontSize: '12px', color: '#2563eb', fontWeight: '600' }}>Garantía Mecánica</span></>}
                                                    {gt === 'sin' && <><ShieldOffIcon color="#bbb" size={14} /><span style={{ fontSize: '12px', color: '#bbb', fontWeight: '600' }}>Sin garantía</span></>}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                                                <ChevronRightIcon />
                                                <span style={{ fontSize: '10px', color: '#ccc', whiteSpace: 'nowrap' }}>Ver detalle</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ══ VISTA 3: DETALLE ══ */}
                    {propuestaSeleccionada && (() => {
                        const p = propuestaSeleccionada;
                        const gt = getGuaranteeType(p.guarantee);
                        const tieneMultiples = Array.isArray(propuestas) && propuestas.length > 1;
                        const tieneGarantia = gt !== 'sin';

                        return (
                            <div style={s.resultadoWrapper}>
                                <div style={s.resultHeader}>
                                    <div>
                                        <h1 style={{ ...s.heroTitle, fontSize: '22px', textAlign: 'left', marginBottom: '0' }}>
                                            {p.brand} {p.model} {p.year}
                                        </h1>
                                    </div>
                                    <button onClick={tieneMultiples ? volverALista : volverAlFormulario} style={s.btnGhostSmall}>
                                        ← {tieneMultiples ? 'Mis pólizas' : 'Otro RUT'}
                                    </button>
                                </div>

                                <div style={s.card}>
                                    <p style={s.cardSectionLabel}>Datos del asegurado y vehículo</p>
                                    <div style={s.infoGrid}>
                                        {[
                                            { label: 'RUT', value: p.rut },
                                            { label: 'Nombre', value: p.name },
                                            { label: 'Marca', value: p.brand },
                                            { label: 'Modelo', value: p.model },
                                            { label: 'Año', value: p.year },
                                            ...(p.patent ? [{ label: 'Patente', value: p.patent }] : []),
                                            { label: 'Compañía', value: p.company },
                                            { label: 'Propuesta', value: `N° ${p.propuesta}` },
                                        ].map(({ label, value }) => (
                                            <div key={label} style={s.infoItem}>
                                                <span style={s.infoLabel}>{label}</span>
                                                <span style={s.infoValue}>{value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* ── Banner beneficios exclusivos ── */}
                                    <a
                                        href="https://clubdelseguro.descuentosvip.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '14px',
                                            marginTop: '4px', padding: '14px 16px', borderRadius: '12px',
                                            background: 'linear-gradient(135deg, #FF521B 0%, #ff7c4d 100%)',
                                            textDecoration: 'none',
                                            boxShadow: '0 4px 14px rgba(255,82,27,0.22)',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,82,27,0.38)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,82,27,0.22)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        {/* Ícono medalla */}
                                        <div style={{
                                            width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="15" r="6" stroke="#fff" strokeWidth="1.8" />
                                                <path d="M8 9l1.5-5h5L16 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 9c0 0 1.5 2 3 2s3-2 3-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                                                <path d="M12 12v3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                                                <path d="M10.5 15.5l1.5-1 1.5 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        {/* Texto */}
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '13px', fontWeight: '800', color: '#fff', marginBottom: '3px' }}>
                                                ¡Tienes beneficios exclusivos!
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.45' }}>
                                                Como cliente del Club del Seguro accedes a descuentos y ventajas especiales. Toca para conocerlos.
                                            </div>
                                        </div>
                                        {/* Chevron */}
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                                            <path d="M9 18L15 12L9 6" stroke="rgba(255,255,255,0.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>

                                    {p.document && (
                                        <div style={{ marginTop: '8px' }}>
                                            <button style={s.btnDark} onClick={() => descargarPoliza(p.document)}>
                                                <DownloadIcon /> Descargar contrato (PDF)
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div style={s.sectionHeader}>
                                    <h2 style={s.sectionTitle}>¿Cómo podemos ayudarte?</h2>
                                    <p style={s.sectionSub}>Selecciona la opción que corresponda a tu situación</p>
                                </div>

                                <div style={s.cardsGrid}>
                                    {/* Card 1 — Siniestro */}
                                    <CardAyuda
                                        accentColor="#FF521B"
                                        icon={<ShieldAlertIcon color="#FF521B" size={22} />}
                                        titulo="Tuve un siniestro"
                                        subtitulo="Choque, abollón, robo, rotura de vidrios, etc."
                                        text={p.sinisterText}
                                        phone={p.sinisterPhone}
                                        url={p.sinisterUrl}
                                        urlLabel="Ver más información"
                                        phoneLabel="Llamar a siniestros"
                                        compania={p.company}
                                    />
                                    {/* Card 2 — Asistencia */}
                                    <CardAyuda
                                        accentColor="#0891b2"
                                        icon={<LifebuoyIcon color="#0891b2" size={22} />}
                                        titulo="Necesito asistencia"
                                        subtitulo="Grúa, vehículo de reemplazo, asistencia en viaje, etc."
                                        text={p.assistancieText}
                                        phone={p.assistanciePhone}
                                        url={p.assistancieUrl}
                                        urlLabel="Solicitar asistencia"
                                        phoneLabel="Llamar a asistencia"
                                        compania={p.company}
                                    />
                                </div>

                                {/* Card Garantía — solo si tiene */}
                                {tieneGarantia && (
                                    <CardGarantia tipo={gt} compania={p.company} />
                                )}

                            </div>
                        );
                    })()}

                </div>

                {/* ── Footer global ── */}
                <div style={s.footerCard}>
                    <p style={s.footerTitle}>¿Necesitas más ayuda?</p>
                    <div style={s.footerRow}>
                        <a href="https://wa.me/56957069658" style={s.footerBtn} target="_blank" rel="noreferrer">
                            <WhatsAppIcon /> WhatsApp +569 5706 9658
                        </a>
                        <a href="tel:6003001919" style={{ ...s.footerBtn, backgroundColor: '#f3f4f6', color: '#1a1a1a' }}>
                            <PhoneIcon /> 600 300 1919
                        </a>
                    </div>
                    <div style={s.avisoModificacion}>
                        <div style={s.avisoIconWrap}>
                            <FileEditIcon size={20} color="#d97706" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <p style={s.avisoTitulo}>¿Deseas modificar o cancelar tu póliza?</p>
                            <p style={s.avisoTexto}>
                                Comunícate con nosotros al{' '}
                                <a href="tel:6003001919" style={s.avisoLink}>600 300 1919</a>
                                {' '}y un ejecutivo te ayudará.
                            </p>
                        </div>
                    </div>
                </div>

                <CotizaAhoraConNosotros />
            </div>
        </div>
    );
}

// ─── CardAyuda: Siniestro y Asistencia ───────────────────────────────────────

function CardAyuda({ accentColor, icon, titulo, subtitulo, text, phone, url, urlLabel, phoneLabel, compania }) {
    const tienePhone = !!phone;
    const tieneUrl = !!url;

    return (
        <div style={{ ...s.card, borderTop: `4px solid ${accentColor}` }}>

            {/* Encabezado con ícono */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    backgroundColor: `${accentColor}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                    {icon}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.3' }}>
                        {titulo}
                    </div>
                    {/* CAMBIO 2: subtítulo como badge destacado con color del acento */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginTop: '6px',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        backgroundColor: `${accentColor}12`,
                        border: `1px solid ${accentColor}30`,
                        fontSize: '11px',
                        fontWeight: '700',
                        color: accentColor,
                        lineHeight: '1.5',
                        letterSpacing: '0.1px',
                    }}>
                        {subtitulo}
                    </div>
                </div>
            </div>

            <div style={s.divider} />

            {/* CAMBIO 1: Compañía en CardAyuda */}
            {compania && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px', backgroundColor: '#f8f9fa', borderRadius: '10px',
                }}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        backgroundColor: `${accentColor}18`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                        <BuildingIcon size={15} />
                    </div>
                    <div>
                        <div style={{ fontSize: '11px', color: '#aaa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Tu compañía
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a' }}>{compania}</div>
                    </div>
                </div>
            )}

            {/* Texto de instrucciones */}
            {text && (
                <div style={{
                    backgroundColor: '#f8f9fa', borderRadius: '10px',
                    padding: '14px 16px', borderLeft: `3px solid ${accentColor}`,
                    display: 'flex', flexDirection: 'column', gap: '6px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="10" fill={accentColor} />
                            <path d="M12 8v5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="16" r="1" fill="#fff" />
                        </svg>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: accentColor, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                            Sigue estos pasos para contactarnos
                        </span>
                    </div>
                    <p style={{ margin: 0, fontSize: '13px', color: '#444', lineHeight: '1.7', paddingLeft: '20px' }}>{text}</p>
                </div>
            )}

            {/* Teléfono */}
            {tienePhone && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px', backgroundColor: '#f8f9fa', borderRadius: '10px',
                }}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        backgroundColor: `${accentColor}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, color: accentColor,
                    }}>
                        <PhoneIcon size={15} />
                    </div>
                    <div>
                        <div style={{ fontSize: '11px', color: '#aaa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            N° de contacto
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a1a1a' }}>{phone}</div>
                    </div>
                </div>
            )}

            {/* Botones de acción */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                {tienePhone && (
                    <a href={`tel:${phone}`} style={{ ...s.btnAction, backgroundColor: accentColor }}>
                        <PhoneIcon size={16} /> {phoneLabel}
                    </a>
                )}
                {tieneUrl && (
                    <a href={url} target="_blank" rel="noreferrer"
                        style={{ ...s.btnAction, backgroundColor: 'transparent', border: `1.5px solid ${accentColor}`, color: accentColor }}>
                        <ExternalLinkIcon size={15} /> {urlLabel}
                    </a>
                )}
                {!tienePhone && !tieneUrl && (
                    <a href="https://wa.me/56957069658" target="_blank" rel="noreferrer"
                        style={{ ...s.btnAction, backgroundColor: '#25D366' }}>
                        <WhatsAppIcon size={16} /> Contactar por WhatsApp
                    </a>
                )}
            </div>
        </div>
    );
}

// ─── CardGarantia ─────────────────────────────────────────────────────────────
// CAMBIO 1: se eliminó el bloque de compañía de aquí

function CardGarantia({ tipo, compania }) {
    const config = {
        total: {
            color: '#16a34a',
            icon: <ShieldCheckIcon color="#16a34a" size={22} />,
            titulo: 'Garantía Total',
            subtitulo: 'Cobertura completa de tu vehículo',
            coberturas: ['Motor y transmisión', 'Sistema eléctrico', 'Dirección y suspensión', 'Frenos', 'Aire acondicionado'],
            accion: (
                <a href="tel:6006560017" style={{ ...s.btnAction, backgroundColor: '#16a34a' }}>
                    <PhoneIcon size={16} /> Llamar al 600 656 0017
                </a>
            ),
        },
        mecanica: {
            color: '#2563eb',
            icon: <WrenchIcon color="#2563eb" size={22} />,
            titulo: 'Garantía Mecánica',
            subtitulo: 'Cobertura de fallas del motor y mecánica',
            coberturas: ['Motor', 'Caja de cambios', 'Sistema eléctrico', 'Dirección', 'Frenos'],
            accion: (
                <a href="https://garantiamecanica.cl/" target="_blank" rel="noreferrer" style={{ ...s.btnAction, backgroundColor: '#2563eb' }}>
                    <ExternalLinkIcon size={15} /> Ir a Garantía Mecánica
                </a>
            ),
        },
    };

    const c = config[tipo];
    if (!c) return null;

    return (
        <div style={{ ...s.card, borderTop: `4px solid ${c.color}` }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    backgroundColor: `${c.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                    {c.icon}
                </div>
                <div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.3' }}>{c.titulo}</div>
                    <div style={{ fontSize: '12px', color: '#999', marginTop: '3px' }}>{c.subtitulo}</div>
                </div>
            </div>
            <div style={s.divider} />
            {/* Coberturas en 2 columnas */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px' }}>
                {c.coberturas.map((cob) => (
                    <div key={cob} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: '#444' }}>
                        <CheckIcon color={c.color} size={16} /> {cob}
                    </div>
                ))}
            </div>
            <div style={s.divider} />
            {c.accion}
        </div>
    );
}

// ─── Estilos ──────────────────────────────────────────────────────────────────

const s = {
    formWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
    heroTitle: { fontSize: '40px', fontWeight: '900', color: '#1a1a1a', lineHeight: '1.25', marginBottom: '14px', letterSpacing: '-0.5px' },
    heroSub: { fontSize: '16px', color: '#666', lineHeight: '1.6', maxWidth: '440px', marginBottom: '36px' },
    orange: { color: '#FF521B' },
    inputGroup: { width: '100%', maxWidth: '500px', textAlign: 'left' },
    inputLabel: { display: 'block', fontSize: '14px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px' },
    inputRow: { display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' },
    errorBanner: { display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '14px', padding: '14px 16px', backgroundColor: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca' },
    sinDatosWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', backgroundColor: '#fff', borderRadius: '20px', padding: '48px 32px', border: '1px solid #e8e8e8', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', textAlign: 'center' },
    tipCard: { display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#eff6ff', borderRadius: '10px', padding: '12px 16px', border: '1px solid #bfdbfe' },
    resultadoWrapper: { display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' },
    resultHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' },
    propuestaCard: { display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e8e8e8', padding: '18px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'pointer', textAlign: 'left', width: '100%', transition: 'box-shadow 0.15s, border-color 0.15s' },
    propuestaIconWrap: { width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#fff5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    metaItem: { display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#777' },
    card: { backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e8e8e8', padding: '22px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '14px' },
    cardSectionLabel: { fontSize: '12px', fontWeight: '700', color: '#999', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '2px' },
    infoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 28px' },
    infoItem: { display: 'flex', flexDirection: 'column', gap: '3px' },
    infoLabel: { fontSize: '11px', color: '#aaa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' },
    infoValue: { fontSize: '15px', color: '#1a1a1a', fontWeight: '700' },
    cardsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' },
    sectionHeader: { marginBottom: '-8px' },
    sectionTitle: { fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '4px' },
    sectionSub: { fontSize: '13px', color: '#999' },
    divider: { height: '1px', backgroundColor: '#f0f0f0' },
    footerCard: { backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e8e8e8', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' },
    footerTitle: { fontSize: '17px', fontWeight: '800', color: '#1a1a1a' },
    footerRow: { display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' },
    footerBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 20px', borderRadius: '10px', backgroundColor: '#25D366', color: '#fff', fontWeight: '700', fontSize: '14px', textDecoration: 'none', border: 'none', cursor: 'pointer' },
    avisoModificacion: { display: 'flex', alignItems: 'center', gap: '14px', width: '100%', maxWidth: '420px', backgroundColor: '#fffbeb', border: '1.5px solid #fcd34d', borderLeft: '5px solid #d97706', borderRadius: '12px', padding: '14px 18px', textAlign: 'left' },
    avisoIconWrap: { width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
    avisoTitulo: { margin: '0 0 3px 0', fontSize: '14px', fontWeight: '800', color: '#92400e' },
    avisoTexto: { margin: 0, fontSize: '13px', color: '#78350f', lineHeight: '1.5' },
    avisoLink: { color: '#d97706', fontWeight: '700', textDecoration: 'none' },
    btnOrange: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', height: '52px', padding: '0 24px', borderRadius: '12px', backgroundColor: '#FF521B', color: '#fff', fontSize: '15px', fontWeight: '700', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' },
    btnDark: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '10px', backgroundColor: '#1a1a1a', color: '#fff', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer' },
    btnAction: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 16px', borderRadius: '10px', color: '#fff', fontSize: '14px', fontWeight: '700', textDecoration: 'none', cursor: 'pointer', border: 'none' },
    btnGhost: { backgroundColor: 'transparent', border: '1.5px solid #ddd', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#666', cursor: 'pointer' },
    btnGhostSmall: { backgroundColor: 'transparent', border: '1.5px solid #ddd', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', color: '#666', cursor: 'pointer', whiteSpace: 'nowrap' },
    spinner: { display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.4)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' },
};

export default Siniestro;
