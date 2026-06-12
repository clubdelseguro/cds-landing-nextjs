'use client';
import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import { useState } from 'react';
import { TextField } from '@mui/material';

// ─── Iconos ───────────────────────────────────────────────────────────────────

const CheckIcon = ({ color = '#FF521B' }) => (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <circle cx="11" cy="11" r="11" fill={color} />
        <path d="M6 11.5L9.5 15L16 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.5 14.1 14.9 14 15.3 14.2C16.6 14.6 18 14.9 19.5 14.9C20.3 14.9 21 15.6 21 16.4V19.5C21 20.3 20.3 21 19.5 21C10.4 21 3 13.6 3 4.5C3 3.7 3.7 3 4.5 3H7.6C8.4 3 9.1 3.7 9.1 4.5C9.1 6 9.4 7.4 9.8 8.7C10 9.1 9.9 9.5 9.6 9.8L6.6 10.8Z" fill="currentColor" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="currentColor" />
        <path d="M5 20H19V18H5V20Z" fill="currentColor" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const AlertIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FFF3CD" stroke="#FFC107" strokeWidth="1.5" />
        <path d="M12 8V12" stroke="#E6A800" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1" fill="#E6A800" />
    </svg>
);

const CarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M5 17H3v-5l2-5h14l2 5v5h-2" stroke="#FF521B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7.5" cy="17.5" r="1.5" fill="#FF521B" />
        <circle cx="16.5" cy="17.5" r="1.5" fill="#FF521B" />
        <path d="M5 12h14" stroke="#FF521B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const ChevronRight = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const STATUS_CONFIG = {
    activa: { label: 'Activa', bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' },
    renunciada: { label: 'Renunciada', bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
    pendiente: { label: 'Pendiente', bg: '#fffbeb', color: '#d97706', border: '#fde68a' },
};

const getStatus = (status = '') => {
    const key = status.toLowerCase();
    return STATUS_CONFIG[key] || { label: status, bg: '#f3f4f6', color: '#666', border: '#e5e7eb' };
};

// ─── Datos simulados ──────────────────────────────────────────────────────────
const MOCK_CON_DATOS = [
    {
        propuesta: 109,
        company: 'REALE CHILE SEGUROS GENERALES S.A',
        assistanciePhone: '600 123 4567',
        status: 'renunciada',
        brand: 'TOYOTA',
        model: 'YARIS',
        year: '2015',
        patent: 'BCDF12',
        document: 'https://cds-admin-dev.s3.amazonaws.com/propuestas/propuesta109-2025-07-30_15-15.pdf',
        guarantee: 'sin garantia',
        name: 'MATIAS IGNACIO MORENO MORENO',
        rut: '19.724.505-0',
    },
    {
        propuesta: 115,
        company: 'RENTA',
        assistanciePhone: '600 987 6543',
        status: 'activa',
        brand: 'TOYOTA',
        model: 'YARIS',
        year: '2015',
        patent: 'BCDF12',
        document: 'https://cds-admin-dev.s3.amazonaws.com/propuestas/propuesta115-2025-10-06_14-41.pdf',
        guarantee: 'garantia mecanica',
        name: 'MATIAS IGNACIO MORENO MORENO',
        rut: '19.724.505-0',
    },
    {
        propuesta: 141,
        company: 'REALE CHILE SEGUROS GENERALES S.A',
        assistanciePhone: '600 111 2222',
        status: 'activa',
        brand: 'TOYOTA',
        model: 'COROLLA',
        year: '2020',
        patent: 'WXYZ99',
        document: 'https://cds-admin-dev.s3.amazonaws.com/propuestas/propuesta141-2025-11-18_12-14.pdf',
        guarantee: 'garantia total',
        name: 'MATIAS IGNACIO MORENO MORENO',
        rut: '19.724.505-0',
    },
];

const MOCK_SIN_DATOS = [];

const MOCK_CON_1_DATO = [
    {
        propuesta: 109,
        company: 'REALE CHILE SEGUROS GENERALES S.A',
        assistanciePhone: '600 123 4567',
        status: 'renunciada',
        brand: 'TOYOTA',
        model: 'YARIS',
        year: '2015',
        patent: 'BCDF12',
        document: 'https://cds-admin-dev.s3.amazonaws.com/propuestas/propuesta109-2025-07-30_15-15.pdf',
        guarantee: 'sin garantia',
        name: 'MATIAS IGNACIO MORENO MORENO',
        rut: '19.724.505-0',
    },
];

// ─── Componente principal ─────────────────────────────────────────────────────

function Siniestro() {
    const [rut, setRut] = useState('');
    // undefined = sin consultar | [] = consultado sin resultados | array = lista | 'detalle' = ver propuesta
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
            await new Promise((res) => setTimeout(res, 1200));

            const rutLimpio = rut.replace(/\./g, '').replace('-', '');
            if (rutLimpio === '111111111') {
                setPropuestas(MOCK_SIN_DATOS);
            } else if (rutLimpio === '131401884') {
                setPropuestas(MOCK_CON_1_DATO);
            } else {
                setPropuestas(MOCK_CON_DATOS);
            }

            // ── API real ──
            // const response = await fetch('/api/poliza', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ rut }),
            // });
            // if (!response.ok) throw new Error('Error API');
            // const data = await response.json(); // array de propuestas
            // setPropuestas(data);
        } catch {
            setError('Error al consultar. Intenta más tarde.');
        } finally {
            setLoading(false);
        }
    };

    const seleccionarPropuesta = (p) => setPropuestaSeleccionada(p);

    const volverALista = () => setPropuestaSeleccionada(null);

    const volverAlFormulario = () => {
        setPropuestas(undefined);
        setPropuestaSeleccionada(null);
        setRut('');
        setError('');
    };

    const descargarPoliza = () => {
        if (!resultado?.poliza_url) return;
        const link = document.createElement('a');
        link.href = resultado.poliza_url;
        link.setAttribute('download', 'poliza.pdf');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const volver = () => {
        setResultado(undefined);
        setRut('');
        setError('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="root-header-error-page" />
            <NavBar />
            <div className="body">
                <div className="root-error-page">

                    {/* ══════════════════════════════════════════════════════
                                VISTA 1: FORMULARIO
                            ══════════════════════════════════════════════════════ */}
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
                                        onKeyDown={(e) => e.key === 'Enter' && !loading && !error && rut.trim() && consultarPoliza()}
                                        error={!!error}
                                        helperText={error || ' '}
                                        fullWidth
                                        size="medium"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '12px',
                                                backgroundColor: '#fff',
                                                fontSize: '16px',
                                                '&.Mui-focused fieldset': { borderColor: '#FF521B', borderWidth: '2px' },
                                            },
                                        }}
                                    />
                                    <button
                                        onClick={consultarPoliza}
                                        disabled={loading || !!error || !rut.trim()}
                                        style={{
                                            ...s.btnOrange,
                                            opacity: (loading || !!error || !rut.trim()) ? 0.55 : 1,
                                            cursor: (loading || !!error || !rut.trim()) ? 'not-allowed' : 'pointer',
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
                                <p style={s.hint}>
                                    💡 Para probar sin datos usa el RUT <strong>11.111.111-1</strong>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ══════════════════════════════════════════════════════
                                VISTA 2A: SIN RESULTADOS
                            ══════════════════════════════════════════════════════ */}
                    {Array.isArray(propuestas) && propuestas.length === 0 && !propuestaSeleccionada && (
                        <div style={s.sinDatosWrapper}>
                            <AlertIcon />
                            <h2 style={{ ...s.sectionTitle, textAlign: 'center', marginBottom: '8px' }}>
                                Sin póliza activa
                            </h2>
                            <p style={{ color: '#666', fontSize: '15px', textAlign: 'center', lineHeight: '1.6', maxWidth: '360px' }}>
                                No encontramos pólizas asociadas al RUT <strong>{rut}</strong> en nuestro sistema.
                            </p>
                            <a href="/cotizar" style={{ ...s.btnOrange, textDecoration: 'none', marginTop: '8px' }}>
                                Contratar seguro ahora
                            </a>
                            <button onClick={volverAlFormulario} style={s.btnGhost}>
                                ← Intentar con otro RUT
                            </button>
                        </div>
                    )}

                    {/* ══════════════════════════════════════════════════════
                                VISTA 2B: LISTA DE PROPUESTAS
                            ══════════════════════════════════════════════════════ */}
                    {Array.isArray(propuestas) && propuestas.length > 0 && !propuestaSeleccionada && (
                        <div style={s.resultadoWrapper}>

                            {/* Header */}
                            <div style={s.resultHeader}>
                                <div>
                                    <h1 style={{ ...s.heroTitle, fontSize: '24px', textAlign: 'left', marginBottom: '6px' }}>
                                        Tus pólizas
                                    </h1>
                                    <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
                                        {propuestas.length} {propuestas.length === 1 ? 'propuesta encontrada' : 'propuestas encontradas'} para el RUT <strong>{rut}</strong>
                                    </p>
                                </div>
                                <button onClick={volverAlFormulario} style={s.btnGhostSmall}>← Otro RUT</button>
                            </div>

                            {/* Cards propuestas */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {propuestas.map((p) => {
                                    const st = getStatus(p.status);
                                    return (
                                        <button
                                            key={p.propuesta}
                                            onClick={() => seleccionarPropuesta(p)}
                                            style={s.propuestaCard}
                                        >
                                            {/* Ícono vehículo */}
                                            <div style={s.propuestaIconWrap}>
                                                <CarIcon />
                                            </div>

                                            {/* Info principal */}
                                            <div style={{ flex: 1, textAlign: 'left' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                                                    <span style={{ fontSize: '16px', fontWeight: '800', color: '#1a1a1a' }}>
                                                        {p.brand} {p.model}
                                                    </span>
                                                </div>
                                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                                    <span style={s.propuestaMeta}>📅 {p.year}</span>
                                                    {p.patent && <span style={s.propuestaMeta}>🚗 {p.patent}</span>}
                                                    <span style={s.propuestaMeta}>🏢 {p.company}</span>
                                                </div>
                                            </div>

                                            {/* Flecha */}
                                            <ChevronRight />
                                        </button>
                                    );
                                })}
                            </div>

                        </div>
                    )}

                    {/* ══════════════════════════════════════════════════════
                                VISTA 3: DETALLE DE UNA PROPUESTA
                            ══════════════════════════════════════════════════════ */}
                    {propuestaSeleccionada && (() => {
                        const p = propuestaSeleccionada;
                        const st = getStatus(p.status);
                        return (
                            <div style={s.resultadoWrapper}>

                                {/* Header */}
                                <div style={s.resultHeader}>
                                    <div>
                                        <span style={{
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            color: st.color,
                                            backgroundColor: st.bg,
                                            display: 'inline-block',
                                            padding: '4px 12px',
                                            borderRadius: '99px',
                                            border: `1px solid ${st.border}`,
                                            marginBottom: '8px',
                                        }}>
                                            Póliza {st.label}
                                        </span>
                                        <h1 style={{ ...s.heroTitle, fontSize: '22px', textAlign: 'left', marginBottom: '0' }}>
                                            {p.brand} {p.model} {p.year}
                                        </h1>
                                    </div>
                                    <button onClick={volverALista} style={s.btnGhostSmall}>← Mis pólizas</button>
                                </div>

                                {/* Card datos */}
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
                                        ].map(({ label, value }) => (
                                            <div key={label} style={s.infoItem}>
                                                <span style={s.infoLabel}>{label}</span>
                                                <span style={s.infoValue}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    {p.document && (
                                        <div style={{ marginTop: '8px' }}>
                                            <button style={s.btnDark} onClick={() => descargarPoliza(p.document)}>
                                                <DownloadIcon /> Descargar póliza (PDF)
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Sección asistencia */}
                                <div style={s.sectionHeader}>
                                    <h2 style={s.sectionTitle}>¿Qué te ocurrió?</h2>
                                    <p style={s.sectionSub}>Contacta directamente a tu compañía según el caso</p>
                                </div>

                                <div style={s.cardsGrid}>
                                    <CardAsistencia
                                        emoji="🚨"
                                        titulo="Tuve un siniestro"
                                        subtitulo="Choque, abollón, robo, vidrios, etc."
                                        coberturas={['Choque', 'Abollón', 'Robo', 'Rotura de vidrios', 'Volcamiento']}
                                        compania={p.company}
                                        telefono={p.assistanciePhone || 'Sin número registrado'}
                                        color="#FF521B"
                                        sinTelefono={!p.assistanciePhone}
                                    />
                                    <CardAsistencia
                                        emoji="🔧"
                                        titulo="Tuve una falla mecánica"
                                        subtitulo="Motor, caja de cambios, sistema eléctrico, etc."
                                        coberturas={['Motor', 'Caja de cambios', 'Sistema eléctrico', 'Dirección', 'Frenos']}
                                        compania={p.company}
                                        telefono={p.assistanciePhone || 'Sin número registrado'}
                                        color="#2563eb"
                                        sinTelefono={!p.assistanciePhone}
                                    />
                                </div>

                                {/* Footer contacto */}
                                <div style={s.footerCard}>
                                    <p style={s.footerTitle}>¿Necesitas más ayuda?</p>
                                    <div style={s.footerRow}>
                                        <a href="https://wa.me/56999999999" style={s.footerBtn} target="_blank" rel="noreferrer">
                                            <WhatsAppIcon />
                                            WhatsApp +569 99999999
                                        </a>
                                        <a href="tel:6003001919" style={{ ...s.footerBtn, backgroundColor: '#f3f4f6', color: '#1a1a1a' }}>
                                            <PhoneIcon />
                                            600 300 1919
                                        </a>
                                    </div>
                                    <p style={s.footerHint}>
                                        Llama al <strong>600 300 1919</strong> para modificar o dar de baja tu póliza.
                                    </p>
                                </div>

                            </div>
                        );
                    })()}

                </div>
                <CotizaAhoraConNosotros />
            </div>
        </div>
    );
}

// ─── Sub-componente card ──────────────────────────────────────────────────────

function CardAsistencia({ emoji, titulo, subtitulo, coberturas, compania, telefono, color, sinTelefono }) {
    return (
        <div style={{ ...s.card, borderTop: `4px solid ${color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{ fontSize: '22px' }}>{emoji}</span>
                <div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#1a1a1a' }}>{titulo}</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>{subtitulo}</div>
                </div>
            </div>

            <div style={s.divider} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {coberturas.map((c) => (
                    <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#444' }}>
                        <CheckIcon color={color} />
                        {c}
                    </div>
                ))}
            </div>

            <div style={s.divider} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>
                    <div style={s.infoLabel}>Tu compañía</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a' }}>{compania}</div>
                </div>
                <div>
                    <div style={s.infoLabel}>N° de asistencia</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: sinTelefono ? '#bbb' : '#1a1a1a' }}>
                        {telefono}
                    </div>
                </div>
            </div>

            {!sinTelefono ? (
                <a href={`tel:${telefono}`} style={{ ...s.btnCall, backgroundColor: color }}>
                    <PhoneIcon /> Llamar ahora
                </a>
            ) : (
                <a href="https://wa.me/56999999999" target="_blank" rel="noreferrer"
                    style={{ ...s.btnCall, backgroundColor: '#25D366' }}>
                    <WhatsAppIcon /> Contactar por WhatsApp
                </a>
            )}
        </div>
    );
}

// ─── Tokens de estilo ─────────────────────────────────────────────────────────

const s = {
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        textAlign: 'center',
    },
    heroTitle: {
        fontSize: '40px',
        fontWeight: '900',
        color: '#1a1a1a',
        lineHeight: '1.25',
        marginBottom: '14px',
        letterSpacing: '-0.5px',
    },
    heroSub: {
        fontSize: '16px',
        color: '#666',
        lineHeight: '1.6',
        maxWidth: '440px',
        marginBottom: '36px',
    },
    orange: { color: '#FF521B' },
    inputGroup: {
        width: '100%',
        maxWidth: '500px',
        textAlign: 'left',
    },
    inputLabel: {
        display: 'block',
        fontSize: '14px',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '8px',
    },
    inputRow: {
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    hint: {
        fontSize: '13px',
        color: '#999',
        marginTop: '10px',
    },
    sinDatosWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '48px 32px',
        border: '1px solid #e8e8e8',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        textAlign: 'center',
    },
    resultadoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
    },
    resultHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '12px',
    },

    // Card propuesta (clickeable)
    propuestaCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        border: '1px solid #e8e8e8',
        padding: '18px 20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        transition: 'box-shadow 0.15s, border-color 0.15s',
        // hover se maneja inline por limitación de estilos en objeto
    },
    propuestaIconWrap: {
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        backgroundColor: '#fff5f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    propuestaMeta: {
        fontSize: '13px',
        color: '#777',
    },

    // Card base
    card: {
        backgroundColor: '#fff',
        borderRadius: '16px',
        border: '1px solid #e8e8e8',
        padding: '22px 24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
    },
    cardSectionLabel: {
        fontSize: '12px',
        fontWeight: '700',
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.8px',
        marginBottom: '2px',
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '14px 28px',
    },
    infoItem: { display: 'flex', flexDirection: 'column', gap: '3px' },
    infoLabel: { fontSize: '11px', color: '#aaa', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' },
    infoValue: { fontSize: '15px', color: '#1a1a1a', fontWeight: '700' },
    cardsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },
    sectionHeader: { marginBottom: '-8px' },
    sectionTitle: { fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '4px' },
    sectionSub: { fontSize: '13px', color: '#999' },
    divider: { height: '1px', backgroundColor: '#f0f0f0' },
    footerCard: {
        backgroundColor: '#fff',
        borderRadius: '16px',
        border: '1px solid #e8e8e8',
        padding: '24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
    },
    footerTitle: { fontSize: '17px', fontWeight: '800', color: '#1a1a1a' },
    footerRow: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    footerBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '11px 20px',
        borderRadius: '10px',
        backgroundColor: '#25D366',
        color: '#fff',
        fontWeight: '700',
        fontSize: '14px',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    footerHint: { fontSize: '13px', color: '#aaa' },
    btnOrange: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        height: '52px',
        padding: '0 24px',
        borderRadius: '12px',
        backgroundColor: '#FF521B',
        color: '#fff',
        fontSize: '15px',
        fontWeight: '700',
        border: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
    },
    btnDark: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        borderRadius: '10px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '700',
        border: 'none',
        cursor: 'pointer',
    },
    btnCall: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px',
        borderRadius: '10px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '700',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        marginTop: '4px',
    },
    btnGhost: {
        backgroundColor: 'transparent',
        border: '1.5px solid #ddd',
        borderRadius: '10px',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#666',
        cursor: 'pointer',
    },
    btnGhostSmall: {
        backgroundColor: 'transparent',
        border: '1.5px solid #ddd',
        borderRadius: '8px',
        padding: '8px 16px',
        fontSize: '13px',
        fontWeight: '600',
        color: '#666',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    },
    spinner: {
        display: 'inline-block',
        width: '16px',
        height: '16px',
        border: '2px solid rgba(255,255,255,0.4)',
        borderTop: '2px solid #fff',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
    },
};

export default Siniestro;
