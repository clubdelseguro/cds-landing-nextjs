import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import Head from 'next/head';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CardMarca } from '../../components/CardMarca';
import { CardMarcaIcon } from '../../components/CardMarcaIcon';
import { useEffect, useState } from 'react';
import styles from '../../styles/soap.module.css';
import { ImportaciaDeElegirnos } from "../../components/ImportaciaDeElegirnos";

function Soap({ data, benefits, brands }) {
    return (
        <div className="body">
            <div className={styles.headerQuienesSomosPage}>
                <NavBar />
                <div className={styles.containerHeaderQuienesSomos}>
                </div>
            </div>
            <>
                <div className={styles.rootNuestroObjetivo}>
                    <div className={styles.itemNuestroObjetivo}>
                        <img loading="lazy" className={styles.imgNuestroObjetivo} src="/assets/quienes-somos/codicon_organization.svg" alt="Icon Organization" />
                        <h1 className={styles.titleNuestroObjetivo}>
                            ¿Qué es el SOAP?
                        </h1>
                    </div>
                    <div className={styles.itemNuestroObjetivo}>
                        <p className={styles.descriptionNuestroObjetivo} >
                            Es un seguro obligatorio, que entrega cobertura en caso de muerte y por las lesiones corporales que sean consecuencia directa de accidentes en los cuales intervenga el vehículo asegurado.
                        </p>
                    </div>
                </div>

                <a href="https://www.segurossura.cl/SoapVenta/Cotizador/enviaPaso?rut=76215627&idConvenio=COREDORESSURAMARZO2024" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div className={styles.rootContainerCotizaAhoraConNosotros}>
                        <div className={styles.imgCotizaAhoraConNosotros} />
                        <div className={styles.contentCotizaAhoraConNosotross}>
                            <h2 className={styles.titleCotizaAhoraConNosotros} style={{ fontWeight: 'normal', color: 'rgb(0, 48, 88)', marginTop: '5px', lineHeight: '40px', maxWidth: '400px' }}>Contrata tu <b>SOAP</b> aquí
                            </h2>
                            <img loading="lazy" src='https://cds-img.s3.us-east-1.amazonaws.com/companies-logo/LogoConsorcio_300x98.svg' width="100" alt="Logo Renta Nacional" style={{ marginTop: '10px' }} />
                            <div className={styles.bottomCotizaAhoraConNosotros} style={{ backgroundColor: 'rgb(0, 48, 88)' }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'normal' }} >Quiero Cotizar mi <b>SOAP</b></span>
                            </div>
                        </div>
                    </div>
                </a>

                <div className={styles.rootNuestraHistoria}>
                    <h2 className={styles.titleNuestraHistoria}>
                        ¿Diferencias con el Seguro Full Cobertura?
                    </h2>
                    <div className={styles.containerNuestraHistoria}>
                        <div className={styles.contentNuestraHistoria}>
                            <img loading="lazy" className={styles.imgNuestraHistoria} src="/assets/quienes-somos/img-content-quienes-somos.svg" alt="Img Nuestra Historia" />
                        </div>
                        <div className={styles.descriptionNuestraHistoria}>
                            {/* {data ? data?.content1 : <Code
                        width={100}
                        height={100}
                        viewBox="0 0 200 100"
                        style={{ width: '517px', height: '230px' }}
                    />} */}
                            <span>
                                El Seguro Obligatorio (SOAP) no cubre los daños que puedan ocasionarse en el vehículo motorizado, solo ampara los riesgos de muerte y lesiones de las personas y reembolsa los gastos médicos y hospitalarios. En cambio, el seguro full cobertura cubre daños al auto y asistencia mecánica, grúas, talleres, entre otros servicios de asistencia. Estos seguros son complementarios entre ellos.
                            </span>
                            <span>
                                El SOAP debe ser contratado por todo propietario de vehículo motorizado, remolque, aclopado y casa rodante al momento de adquirir su permiso de circulación.
                            </span>
                        </div>
                    </div>
                </div>
                <div id="texto" className={styles.desarrolloNuestraHistoria}>
                    <h3>¿Por qué asegurar tu auto con SURA?</h3>
                    <p>
                        ✔ Porque cuentan con 79 años de experiencia a nivel mundial.
                    </p>
                    <p>
                        ✔ Porque se preocupan de que siempre tengas las mejores condiciones en tu Seguro Automotriz.
                    </p>
                    <p>
                        ✔ Porque están ubicados a lo largo de todo Chile, contando con 16 sucursales.
                    </p>
                    <p>
                        ✔ Porque puedes contratar tu seguro SOAP en su sitio web de forma simple, rápida y segura.
                    </p>
                </div>
                <ImportaciaDeElegirnos />

                <a href="https://www.segurossura.cl/SoapVenta/Cotizador/enviaPaso?rut=76215627&idConvenio=COREDORESSURAMARZO2024" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div className={styles.rootContainerCotizaAhoraConNosotros}>
                        <div className={styles.imgCotizaAhoraConNosotros} />
                        <div className={styles.contentCotizaAhoraConNosotross}>
                            <h2 className={styles.titleCotizaAhoraConNosotros} style={{ fontWeight: 'normal', color: 'rgb(0, 48, 88)', marginTop: '5px', lineHeight: '40px', maxWidth: '400px' }}>Contrata tu <b>SOAP</b> aquí
                            </h2>
                            <img loading="lazy" src='https://cds-img.s3.us-east-1.amazonaws.com/companies-logo/LogoConsorcio_300x98.svg' width="100" alt="Logo Renta Nacional" style={{ marginTop: '10px' }} />
                            <div className={styles.bottomCotizaAhoraConNosotros} style={{ backgroundColor: 'rgb(0, 48, 88)' }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'normal' }} >Quiero Cotizar mi <b>SOAP</b></span>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        </div>
    )
}

Soap.getInitialProps = async ({ req }) => {


    return {

    };
};

export default Soap;
