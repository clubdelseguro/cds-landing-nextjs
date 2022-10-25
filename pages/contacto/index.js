import Link from "next/link";
import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/contacto.module.css';
import Head from 'next/head'


function Contacto({ data }) {
    return (
        <div className="body" style={{ position: 'relative' }}>
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.rootContacto}>
                <div className={styles.containerContacto}>
                    <h1 style={{
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '36px',
                        lineHeight: '42px',
                        textAlign: 'center'
                    }}>Contacto</h1>
                    <div className={styles.llamanosContacto}>
                        <h2 className={styles.titleLlamanosContacto}>Llámanos</h2>
                        <div className={styles.bottomLlamanosContacto}>
                            <img loading="lazy" src="/assets/logo-phone.svg" alt="Logo Phone" />
                            <a href="tel:+6003001919" className={styles.phoneLlamanosContacto}>6003001919</a>
                        </div>
                    </div>
                    <h3 style={{
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '24.4881px',
                        lineHeight: '29px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginLeft: '39px',
                        marginRight: '39px'
                    }}>Encuentranos en nuestras Redes Sociales:</h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <a className="rrss-a" href="https://www.instagram.com/clubdelsegurocl/" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ height: '37.28px' }} src="/assets/logo-insta.svg" alt="logo insta" />
                        </a>
                        <a className="rrss-a" href="https://www.facebook.com/clubdelseguro.cl/" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '26px', height: '33.11px' }} src="/assets/logo-fb.svg" alt="logo fb" />
                        </a>
                        <a className="rrss-a" href="https://twitter.com/Club_Del_Seguro" target="_blank" rel="noreferrer">
                            <img loading="lazy" style={{ marginLeft: '26px', height: '31.85px' }} src="/assets/logo-twiter.svg" alt="logo twiter" />
                        </a>
                    </div>
                </div>
            </div>
            <NavBar />
            <div className={styles.contentContacto}>
                <h3 style={{
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '33.6px',
                    lineHeight: '39px',
                    color: '#FC8100'
                }}>Te podría interesar también:</h3>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                }}>
                    <Link href="/asistencias">
                        <div className={styles.asistenciasCardPageContacto}>
                            <span className={styles.cardHelpTitleContacto}>Asistencias</span>
                        </div>
                    </Link>
                    <Link href="/faq">
                        <div className={styles.faqCardPageContacto}>
                            <span className={styles.cardHelpTitleContacto}>Preguntas Frecuentes</span>
                        </div>
                    </Link>
                </div>
            </div>
            <CotizaAhoraConNosotros />
        </div>
    )
}


Contacto.getInitialProps = async ({ req }) => {
    const [data] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/6`).then((r) => r.json()),
    ]);

    return {
        data,
    };
};

export default Contacto;

