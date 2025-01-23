import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <div className="root">
            <div className="container">
                <div className="item">
                    <div className="title">
                        Datos de contacto
                    </div>
                    <div className="content">
                        {/* <span>info@clubdelseguro.cl</span> */}
                        <span>Avenida el Bosque Central #92, Las Condes, Santiago de Chile.</span>
                    </div>
                    <div className="rrss" >
                        <a className="rrss-a" href="https://www.instagram.com/clubdelsegurocl/" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '16.98px', height: '19.25px' }} src="/assets/logo-insta.svg" alt="logo insta" />
                        </a>
                        <a className="rrss-a" href="https://www.facebook.com/clubdelseguro.cl/" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '10.81px', height: '17px' }} src="/assets/logo-fb.svg" alt="logo fb" />
                        </a>
                        {/* <a className="rrss-a" href="https://twitter.com/Club_Del_Seguro" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '12.27px', height: '16.5px' }} src="/assets/logo-twiter.svg" alt="logo twiter" />
                        </a> */}
                        <a className="rrss-a" href="tel:+6003001919" style={{ marginLeft: '11.1px', marginRight: '14.92px', height: '17px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '12px', lineHeight: '14px', textDecoration: 'none', color: '#000000' }}>
                            <img loading="lazy" style={{ height: '17px' }} src="/assets/logo-phone.svg" alt="logo phone" />
                            <span style={{ marginLeft: '14px' }}>6003001919</span>
                        </a>
                    </div>
                </div>
                <div className="item">
                    <div className="title">
                        Contenido destacado
                    </div>
                    <ul className="content" style={{ padding: '0px 15px' }}>
                        <li>
                            <Link href={'/blog/guia-completa-para-contratar-un-seguro-para-autos'}>
                                <div className='link'>
                                    Guía completa para contratar un seguro para autos
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/blog/seguro-automotriz-todo-lo-que-debes-saber-acerca-de-las-coberturas'}>
                                <div className='link'>
                                    Seguro Automotriz, todo lo que debes saber acerca de las coberturas
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/blog/guia-para-cotizar-el-seguro-de-tu-auto'}>
                                <div className='link'>
                                    Guía para cotizar el seguro de tu auto
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="item">
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '16px' }}>
                        <img loading="lazy" src="https://cds-img.s3.us-east-1.amazonaws.com/Logo+CDS+2025.png" width="241px" alt="Logo CDS" />
                    </div>
                </div>
            </div>
            <div className="derechos">
                © Club del Seguro, 2018. All Rights Reserved.
            </div>
        </div>
    )

}