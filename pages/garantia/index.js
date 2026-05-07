'use client';
import { NavBar } from '../../components/NavBar';
import Link from 'next/link';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import { useState } from 'react';
import { TextField } from '@mui/material';

function Garantia() {

    const [rut, setRut] = useState('');
    const [resultado, setResultado] = useState(null);
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
            suma += multiplo * cuerpo.charAt(i);
            multiplo = multiplo < 7 ? multiplo + 1 : 2;
        }

        const dvEsperado = 11 - (suma % 11);

        let dvFinal = '';

        if (dvEsperado === 11) dvFinal = '0';
        else if (dvEsperado === 10) dvFinal = 'K';
        else dvFinal = dvEsperado.toString();

        return dvFinal === dv;
    };

    const handleRutChange = (e) => {
        const valorFormateado = formatearRut(e.target.value);
        setError(validarRut(valorFormateado) ? '' : 'RUT no válido');
        setRut(valorFormateado);
    };

    const buscarGarantia = async () => {
        setError('');
        setResultado(null);

        if (!rut.trim()) {
            setError('Debes ingresar un RUT');
            return;
        }

        if (!validarRut(rut)) {
            setError('El RUT ingresado no es válido');
            return;
        }

        try {
            setLoading(true);

            const response = await fetch('https://srwpzwufyxmbtkhfxycl.supabase.co/functions/v1/customer-exists-by-rut', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rut: rut
                })
            });

            if (!response.ok) {
                throw new Error('Error API');
            }

            const data = await response.json();

            setResultado(data.exists);

        } catch (error) {
            // console.error(error);

            setError(
                'Error al buscar. Intenta más tarde.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="root-header-error-page">
            </div>
            <NavBar />
            <div className="body">
                <div className="root-error-page">
                    <div className="header-error-page">
                        <h1 className="title-error-page">
                            Consulta tu garantía
                        </h1>

                        <p className="description-error-page">
                            Ingresa tu RUT para consultar el tipo de garantía asociada.
                        </p>
                    </div>
                    <div
                        style={{
                            margin: '20px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '40px',
                            flexWrap: 'wrap'
                        }}
                    >
                        <TextField
                            type="text"
                            placeholder="Ingresa tu RUT"
                            value={rut}
                            onChange={handleRutChange}
                            style={{
                                height: '50px',
                                minWidth: '200px',
                                maxWidth: '300px',
                                fontSize: '16px',
                                flex: 1
                            }}
                            error={!!error}
                            helperText={error ? error : ''}
                        />


                        <button
                            onClick={buscarGarantia}
                            disabled={loading}
                            style={{
                                height: '50px',
                                borderRadius: '10px',
                                minWidth: '120px',
                                maxWidth: '140px',
                                border: 'none',
                                backgroundColor: loading ? '#bdbdbd' : '#ff6600',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                flex: '1 1 120px',
                                opacity: loading ? 0.8 : 1,
                                transition: '0.2s'
                            }}
                        >
                            {loading ? 'Cargando...' : 'Buscar'}
                        </button>
                    </div>

                    {resultado !== null && (
                        <div
                            style={{
                                width: '100%',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    padding: '30px',
                                    borderRadius: '20px',
                                    backgroundColor: '#f8f8f8',
                                    border: '1px solid #e5e5e5',
                                    marginTop: '20px',
                                    boxShadow: '0px 4px 15px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                {/* <div
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                        color: '#ff6600'
                                    }}
                                >
                                    ¡Excelente! Tu garantía está activa
                                </div> */}

                                <div
                                    style={{
                                        fontSize: '20px',
                                        color: '#333',
                                        fontWeight: '600',
                                        lineHeight: '30px'
                                    }}
                                >
                                    {resultado ? (
                                        <>
                                            {/*  Tu vehículo cuenta con{' '}
                                            <span style={{ color: '#ff6600' }}>
                                                Garantía Mecánica
                                            </span>
                                            .
                                            <br /> */}
                                            Para revisar la información y cobertura de tu garantía,
                                            visita el siguiente enlace o presiona el botón.
                                        </>
                                    ) : (
                                        <>
                                            {/* Tu vehículo cuenta con{' '}
                                            <span style={{ color: '#ff6600' }}>
                                                Garantía Total
                                            </span>
                                            .
                                            <br /> */}
                                            Para recibir asistencia o más información, llama al
                                            siguiente número o presiona el botón.
                                        </>
                                    )}
                                </div>

                                {resultado ? (
                                    <a
                                        href="https://garantiamecanica.cl/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            width: '100%',
                                            maxWidth: '320px',
                                            padding: '14px 22px',
                                            backgroundColor: '#ff6600',
                                            color: '#fff',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            transition: '0.2s'
                                        }}
                                    >
                                        Ir a garantía mecánica
                                    </a>
                                ) : (
                                    <a
                                        href="tel:+56912345678"
                                        style={{
                                            width: '100%',
                                            maxWidth: '320px',
                                            padding: '14px 22px',
                                            backgroundColor: '#ff6600',
                                            color: '#fff',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            transition: '0.2s'
                                        }}
                                    >
                                        Llamar al +56 9 1234 5678
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <CotizaAhoraConNosotros />
            </div>
        </div>
    )
}

export default Garantia;
