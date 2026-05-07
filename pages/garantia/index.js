'use client';
import { NavBar } from '../../components/NavBar';
import Link from 'next/link';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import { useState } from 'react';

function Garantia() {

    const [rut, setRut] = useState('');
    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(false);

    const buscarGarantia = async () => {
        if (!rut) {
            alert('Ingresa un RUT');
            return;
        }

        try {
            setLoading(true);
            setResultado(null);

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
                throw new Error('Error al consultar garantía');
            }
            
            const data = await response.json();
            console.log('data', data);

            // La API debe retornar algo como:
            // true
            // o
            // { result: true }

            setResultado(
                typeof data === 'boolean'
                    ? data
                    : data.result
            );
        } catch (error) {
            console.error(error);
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
                        <input
                            type="text"
                            placeholder="Ingresa tu RUT"
                            value={rut}
                            onChange={(e) => setRut(e.target.value)}
                            style={{
                                height: '50px',
                                minWidth: '200px',
                                maxWidth: '300px',
                                borderRadius: '10px',
                                border: '1px solid #ccc',
                                padding: '0 15px',
                                fontSize: '16px',
                                flex: 1
                            }}
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
                                <div
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 'bold',
                                        color: '#ff6600'
                                    }}
                                >
                                    ¡Excelente! Tu garantía está activa
                                </div>

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
                                            Tu vehículo cuenta con{' '}
                                            <span style={{ color: '#ff6600' }}>
                                                Garantía Mecánica
                                            </span>
                                            .
                                            <br />
                                            Para revisar la información y cobertura de tu garantía,
                                            visita el siguiente enlace o presiona el botón.
                                        </>
                                    ) : (
                                        <>
                                            Tu vehículo cuenta con{' '}
                                            <span style={{ color: '#ff6600' }}>
                                                Garantía Total
                                            </span>
                                            .
                                            <br />
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
