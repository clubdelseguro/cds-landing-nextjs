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

function AsistenciaDeViaje({ data, benefits, brands }) {
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
                            ¿Qué es una asistencia en viaje?
                        </h1>
                    </div>
                    <div className={styles.itemNuestroObjetivo}>
                        <p className={styles.descriptionNuestroObjetivo} >
                            Es una asistencia diseñada para proteger a las personas contra riesgos y pérdidas financieras que puedan ocurrir en viaje. Puede incluir Cobertura médica, Cancelación o interrupción del viaje, Pérdida de equipaje, Compensaciones por retrasos en vuelos, Repatriación, entre otros.
                        </p>
                    </div>
                </div>

                <a href="https://asistencia.seguroenviaje.com/Administracion/Seguro/A76215627K1044" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div className={styles.rootContainerCotizaAhoraConNosotros}>
                        <div className={styles.imgAsistenciaViaje} />
                        <div className={styles.contentCotizaAhoraConNosotross}>
                            <h2 className={styles.titleCotizaAhoraConNosotros} style={{ fontWeight: 'normal', color: 'rgb(0, 51, 160)', marginTop: '5px', lineHeight: '40px', maxWidth: '400px' }}>Contrata tu <b>Asistencia de Viaje</b> aquí
                            </h2>
                            {/*  <img loading="lazy" src='https://cds-landing.s3.sa-east-1.amazonaws.com/logo_sura_4b190d7fcb.png' width="100" alt="Logo Renta Nacional" style={{ marginTop: '10px' }} /> */}
                            <div className={styles.bottomCotizaAhoraConNosotros} style={{ backgroundColor: 'rgb(0, 51, 160)' }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'normal' }} >Quiero Cotizar mi <b>ASISTENCIA DE VIAJE</b></span>
                            </div>
                        </div>
                    </div>
                </a>

                <div className={styles.rootNuestraHistoria}>
                    <h2 className={styles.titleNuestraHistoria}>
                        ¿Por qué es recomendable contratar asistencia de viaje?
                    </h2>
                    <div className={styles.containerNuestraHistoria}>
                        <div className={styles.contentNuestraHistoria}>
                            <img loading="lazy" className={styles.imgNuestraHistoria} src="/assets/cds-3.png" alt="Img Nuestra Historia" />
                        </div>
                        <div className={styles.descriptionNuestraHistoria}>
                            <span>
                                Contratar asistencia de viaje es recomendable por varias razones, ya que es una inversión que te brinda protección y asistencia en situaciones imprevistas, permitiéndote viajar con mayor confianza ofrece protección ante eventos que pueden surgir mientras estás fuera de tu país.
                            </span>
                            {/* <span>
                                La asistencia en viaje está diseñada específicamente para cubrir eventos inesperados durante un viaje, por lo general, por un período corto.
                            </span>
                            <span>
                                La asistencia en viaje ofrece protección médica solo para emergencias que ocurran mientras estás de viaje. No cubre condiciones preexistentes ni tratamientos rutinarios.
                            </span> */}
                        </div>
                    </div>
                </div>
                {/*  <div id="texto" className={styles.desarrolloNuestraHistoria}>
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
                </div> */}
                {/* <ImportaciaDeElegirnos /> */}

                {/*  <a href="https://www.segurossura.cl/SoapVenta/Cotizador/enviaPaso?rut=76215627&idConvenio=COREDORESSURAMARZO2024" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div className={styles.rootContainerCotizaAhoraConNosotros}>
                        <div className={styles.imgAsistenciaViaje} />
                        <div className={styles.contentCotizaAhoraConNosotross}>
                            <h2 className={styles.titleCotizaAhoraConNosotros} style={{ fontWeight: 'normal', color: 'rgb(0, 51, 160)', marginTop: '5px', lineHeight: '40px', maxWidth: '400px' }}>
                                Contrata tu <b>Asistencia de Viaje</b> aquí
                            </h2>
                            <img loading="lazy" src='https://cds-landing.s3.sa-east-1.amazonaws.com/logo_sura_4b190d7fcb.png' width="100" alt="Logo Renta Nacional" style={{ marginTop: '10px' }} />
                            <div className={styles.bottomCotizaAhoraConNosotros} style={{ backgroundColor: 'rgb(0, 51, 160)' }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'normal' }} >Quiero Cotizar mi <b>ASISTENCIA DE VIAJE</b></span>
                            </div>
                        </div>
                    </div>
                </a> */}
            </>
        </div>
    )
}

AsistenciaDeViaje.getInitialProps = async ({ req }) => {


    return {

    };
};

export default AsistenciaDeViaje;
