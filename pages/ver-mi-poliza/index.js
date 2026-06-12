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

// ─── Datos simulados ──────────────────────────────────────────────────────────

const MOCK_CON_DATOS = {
    rut: '12.345.678-9',
    nombre: 'Juan Pérez González',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2021,
    poliza_url: 'https://mi-bucket.s3.amazonaws.com/polizas/poliza-ejemplo.pdf',
    siniestro: {
        coberturas: ['Choque', 'Abollón', 'Robo', 'Rotura de vidrios', 'Volcamiento'],
        compania: 'Reale',
        telefono: '999999999',
    },
    falla_mecanica: {
        coberturas: ['Motor', 'Caja de cambios', 'Sistema eléctrico', 'Dirección', 'Frenos'],
        compania: 'Garantía Total',
        telefono: '988888888',
    },
    asistencias: [
        { id: 1, titulo: 'Asistencia de grúa', icono: '🚛' },
        { id: 2, titulo: 'Asistencia de taxi', icono: '🚕' },
        { id: 3, titulo: 'Vehículo de reemplazo', icono: '🚗' },
        { id: 4, titulo: 'Inspección técnica', icono: '🔧' },
        { id: 5, titulo: 'Asistencia en viaje', icono: '🗺️' },
    ],
};

// RUT de prueba sin datos: 11.111.111-1
const MOCK_SIN_DATOS = null;

// ─── Componente principal ─────────────────────────────────────────────────────

function Siniestro() {
    const [rut, setRut] = useState('');
    const [resultado, setResultado] = useState(undefined); // undefined = no consultado aún
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
        setResultado(undefined);

        if (!rut.trim()) { setError('Debes ingresar un RUT'); return; }
        if (!validarRut(rut)) { setError('El RUT ingresado no es válido'); return; }

        try {
            setLoading(true);
            await new Promise((res) => setTimeout(res, 1200));

            // RUT de prueba sin datos: 11.111.111-1
            const rutLimpio = rut.replace(/\./g, '').replace('-', '');
            if (rutLimpio === '111111111') {
                setResultado(MOCK_SIN_DATOS);
            } else {
                setResultado(MOCK_CON_DATOS);
            }

            // ── API real ──
            // const response = await fetch('/api/poliza', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ rut }),
            // });
            // if (!response.ok) throw new Error('Error API');
            // const data = await response.json();
            // setResultado(data); // null si no tiene póliza
        } catch {
            setError('Error al consultar. Intenta más tarde.');
        } finally {
            setLoading(false);
        }
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

    // ─── Vista: Formulario ────────────────────────────────────────────────────
    const VistaFormulario = () => (
        <div style={s.formWrapper}>
            {/* Pill badge */}
            {/* <div style={s.badge}>🆘 Asistencia inmediata</div> */}

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
    );

    // ─── Vista: Sin datos ─────────────────────────────────────────────────────
    const VistaSinDatos = () => (
        <div style={s.sinDatosWrapper}>
            <AlertIcon />
            <h2 style={{ ...s.sectionTitle, textAlign: 'center', marginBottom: '8px' }}>
                Sin póliza activa
            </h2>
            <p style={{ color: '#666', fontSize: '15px', textAlign: 'center', lineHeight: '1.6', maxWidth: '360px' }}>
                Lamentablemente no encontramos una póliza asociada al RUT <strong>{rut}</strong> en nuestro sistema.
            </p>
            <a href="/cotizar" style={{ ...s.btnOrange, textDecoration: 'none', marginTop: '8px' }}>
                Contratar seguro ahora
            </a>
            <button onClick={volver} style={s.btnGhost}>
                ← Intentar con otro RUT
            </button>
        </div>
    );

    // ─── Vista: Con datos ─────────────────────────────────────────────────────
    const VistaConDatos = () => (
        <div style={s.resultadoWrapper}>

            {/* Header resultado */}
            <div style={s.resultHeader}>
                <div>
                    <p style={s.resultBadge}>✅ Póliza activa</p>
                    <h1 style={{ ...s.heroTitle, fontSize: '22px', textAlign: 'left', marginBottom: '0' }}>
                        ¡Estamos para ayudarte!
                    </h1>
                </div>
                <button onClick={volver} style={s.btnGhostSmall}>← Volver</button>
            </div>

            {/* Card info asegurado */}
            <div style={s.card}>
                <p style={s.cardSectionLabel}>Datos del asegurado</p>
                <div style={s.infoGrid}>
                    {[
                        { label: 'RUT', value: resultado.rut },
                        { label: 'Nombre', value: resultado.nombre },
                        { label: 'Marca', value: resultado.marca },
                        { label: 'Modelo', value: resultado.modelo },
                        { label: 'Año', value: resultado.anio },
                    ].map(({ label, value }) => (
                        <div key={label} style={s.infoItem}>
                            <span style={s.infoLabel}>{label}</span>
                            <span style={s.infoValue}>{value}</span>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button style={s.btnDark} onClick={descargarPoliza}>
                        <DownloadIcon /> Descargar póliza (PDF)
                    </button>
                </div>
            </div>

            {/* Título sección */}
            <div style={s.sectionHeader}>
                <h2 style={s.sectionTitle}>¿Qué te ocurrió?</h2>
                <p style={s.sectionSub}>Contacta directamente a tu compañía según el caso</p>
            </div>

            {/* Cards siniestro / falla */}
            <div style={s.cardsGrid}>
                <CardAsistencia
                    emoji="🚨"
                    titulo="Tuve un siniestro"
                    subtitulo="Choque, abollón, robo, vidrios, etc."
                    coberturas={resultado.siniestro.coberturas}
                    compania={resultado.siniestro.compania}
                    telefono={resultado.siniestro.telefono}
                    color="#FF521B"
                />
                <CardAsistencia
                    emoji="🔧"
                    titulo="Tuve una falla mecánica"
                    subtitulo="Motor, caja de cambios, sistema eléctrico, etc."
                    coberturas={resultado.falla_mecanica.coberturas}
                    compania={resultado.falla_mecanica.compania}
                    telefono={resultado.falla_mecanica.telefono}
                    color="#2563eb"
                />
            </div>

            {/* Otros productos */}
            <div style={s.sectionHeader}>
                <h2 style={s.sectionTitle}>Tus otros productos</h2>
                <p style={s.sectionSub}>Beneficios incluidos en tu póliza</p>
            </div>

            {resultado.asistencias?.length > 0 ? (
                <div style={s.asistenciaGrid}>
                    {resultado.asistencias.map((a) => (
                        <div key={a.id} style={s.asistenciaCard}>
                            <span style={s.asistenciaEmoji}>{a.icono}</span>
                            <div style={{ flex: 1 }}>
                                <span style={s.asistenciaTexto}>{a.titulo}</span>
                            </div>
                            <CheckIcon color="#16a34a" />
                        </div>
                    ))}
                </div>
            ) : (
                <div style={s.emptyCard}>
                    <p>No tienes asistencias adicionales contratadas.</p>
                    <a href="/cotizar" style={{ ...s.btnOrange, marginTop: '12px', display: 'inline-flex', textDecoration: 'none' }}>
                        Contratar ahora
                    </a>
                </div>
            )}

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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="root-header-error-page">
            </div>
            <NavBar />
            <div className="body">
                <div className="root-error-page">
                    {resultado === undefined && (<div style={s.formWrapper}>
                        {/* Pill badge */}
                        {/* <div style={s.badge}>🆘 Asistencia inmediata</div> */}

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
                    </div>)}
                    {resultado === null && (<div style={s.sinDatosWrapper}>
                        <AlertIcon />
                        <h2 style={{ ...s.sectionTitle, textAlign: 'center', marginBottom: '8px' }}>
                            Sin póliza activa
                        </h2>
                        <p style={{ color: '#666', fontSize: '15px', textAlign: 'center', lineHeight: '1.6', maxWidth: '360px' }}>
                            Lamentablemente no encontramos una póliza asociada al RUT <strong>{rut}</strong> en nuestro sistema.
                        </p>
                        <a href="/cotizar" style={{ ...s.btnOrange, textDecoration: 'none', marginTop: '8px' }}>
                            Contratar seguro ahora
                        </a>
                        <button onClick={volver} style={s.btnGhost}>
                            ← Intentar con otro RUT
                        </button>
                    </div>)}
                    {resultado !== null && resultado !== undefined && (<div style={s.resultadoWrapper}>

                        {/* Header resultado */}
                        <div style={s.resultHeader}>
                            <div>
                                <p style={s.resultBadge}>✅ Póliza activa</p>
                                <h1 style={{ ...s.heroTitle, fontSize: '22px', textAlign: 'left', marginBottom: '0' }}>
                                    ¡Estamos para ayudarte!
                                </h1>
                            </div>
                            <button onClick={volver} style={s.btnGhostSmall}>← Volver</button>
                        </div>

                        {/* Card info asegurado */}
                        <div style={s.card}>
                            <p style={s.cardSectionLabel}>Datos del asegurado</p>
                            <div style={s.infoGrid}>
                                {[
                                    { label: 'RUT', value: resultado.rut },
                                    { label: 'Nombre', value: resultado.nombre },
                                    { label: 'Marca', value: resultado.marca },
                                    { label: 'Modelo', value: resultado.modelo },
                                    { label: 'Año', value: resultado.anio },
                                ].map(({ label, value }) => (
                                    <div key={label} style={s.infoItem}>
                                        <span style={s.infoLabel}>{label}</span>
                                        <span style={s.infoValue}>{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <button style={s.btnDark} onClick={descargarPoliza}>
                                    <DownloadIcon /> Descargar póliza (PDF)
                                </button>
                            </div>
                        </div>

                        {/* Título sección */}
                        <div style={s.sectionHeader}>
                            <h2 style={s.sectionTitle}>¿Qué te ocurrió?</h2>
                            <p style={s.sectionSub}>Contacta directamente a tu compañía según el caso</p>
                        </div>

                        {/* Cards siniestro / falla */}
                        <div style={s.cardsGrid}>
                            <CardAsistencia
                                emoji="🚨"
                                titulo="Tuve un siniestro"
                                subtitulo="Choque, abollón, robo, vidrios, etc."
                                coberturas={resultado.siniestro.coberturas}
                                compania={resultado.siniestro.compania}
                                telefono={resultado.siniestro.telefono}
                                color="#FF521B"
                            />
                            <CardAsistencia
                                emoji="🔧"
                                titulo="Tuve una falla mecánica"
                                subtitulo="Motor, caja de cambios, sistema eléctrico, etc."
                                coberturas={resultado.falla_mecanica.coberturas}
                                compania={resultado.falla_mecanica.compania}
                                telefono={resultado.falla_mecanica.telefono}
                                color="#2563eb"
                            />
                        </div>

                        {/* Otros productos */}
                        <div style={s.sectionHeader}>
                            <h2 style={s.sectionTitle}>Tus otros productos</h2>
                            <p style={s.sectionSub}>Beneficios incluidos en tu póliza</p>
                        </div>

                        {resultado.asistencias?.length > 0 ? (
                            <div style={s.asistenciaGrid}>
                                {resultado.asistencias.map((a) => (
                                    <div key={a.id} style={s.asistenciaCard}>
                                        <span style={s.asistenciaEmoji}>{a.icono}</span>
                                        <div style={{ flex: 1 }}>
                                            <span style={s.asistenciaTexto}>{a.titulo}</span>
                                        </div>
                                        <CheckIcon color="#16a34a" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={s.emptyCard}>
                                <p>No tienes asistencias adicionales contratadas.</p>
                                <a href="/cotizar" style={{ ...s.btnOrange, marginTop: '12px', display: 'inline-flex', textDecoration: 'none' }}>
                                    Contratar ahora
                                </a>
                            </div>
                        )}

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

                    </div>)}
                </div>

                <CotizaAhoraConNosotros />
            </div>
        </div>
    );
}

// ─── Sub-componente card ──────────────────────────────────────────────────────

function CardAsistencia({ emoji, titulo, subtitulo, coberturas, compania, telefono, color }) {
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
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a' }}>{compania}</div>
                </div>
                <div>
                    <div style={s.infoLabel}>N° de asistencia</div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a1a' }}>{telefono}</div>
                </div>
            </div>

            <a
                href={`tel:+56${telefono}`}
                style={{ ...s.btnCall, backgroundColor: color }}
            >
                <PhoneIcon /> Llamar ahora
            </a>
        </div>
    );
}

// ─── Tokens de estilo ─────────────────────────────────────────────────────────

const s = {
    pageWrapper: {
        width: '100%',
        maxWidth: '720px',
        padding: '48px 20px 64px',
        boxSizing: 'border-box',
    },

    // Formulario
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        textAlign: 'center',
    },
    badge: {
        display: 'inline-block',
        backgroundColor: '#fff3e8',
        color: '#cc4400',
        fontSize: '13px',
        fontWeight: '700',
        padding: '6px 14px',
        borderRadius: '99px',
        border: '1px solid #ffd5b8',
        marginBottom: '20px',
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

    // Sin datos
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

    // Resultado
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
    resultBadge: {
        fontSize: '13px',
        fontWeight: '700',
        color: '#16a34a',
        backgroundColor: '#f0fdf4',
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '99px',
        border: '1px solid #bbf7d0',
        marginBottom: '8px',
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
    infoValue: { fontSize: '16px', color: '#1a1a1a', fontWeight: '700' },

    // Grids
    cardsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },
    asistenciaGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
    },
    asistenciaCard: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #e8e8e8',
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    },
    asistenciaEmoji: { fontSize: '20px' },
    asistenciaTexto: { fontSize: '13px', fontWeight: '600', color: '#1a1a1a' },
    emptyCard: {
        backgroundColor: '#fff',
        borderRadius: '14px',
        border: '1px dashed #ddd',
        padding: '28px',
        textAlign: 'center',
        color: '#999',
        fontSize: '15px',
    },

    // Sección header
    sectionHeader: { marginBottom: '-8px' },
    sectionTitle: { fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '4px' },
    sectionSub: { fontSize: '13px', color: '#999' },

    // Divider
    divider: { height: '1px', backgroundColor: '#f0f0f0' },

    // Footer
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

    // Botones
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

    // Spinner
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
