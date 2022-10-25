
import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/politicas.module.css';
import Head from "next/head";
import { CardsHelp } from "../../components/CardsHelp";



function Politicas({ data }) {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.rootHeaderErrorPage}>
                <div className={styles.bottomHeaderPoliticasPage}>
                    <h1 className={styles.titlePoliticas}>{data?.data.title}</h1>
                </div>
            </div>
            <NavBar />
            <div className="body">
                <div className={styles.rootPoliticas}>
                    <p className={styles.descriptionPoliticas}>{data?.data.description}</p>
                    <div className={styles.containerPoliticas}>
                        <iframe className={styles.iframe} title='Terminos y Condiciones' src="https://cds-landing.s3.sa-east-1.amazonaws.com/Terminos_y_condiciones_Club_del_Seguro_nuevo_c0d21091fd.pdf"></iframe>
                    </div>
                    <CotizaAhoraConNosotros />
                    <CardsHelp />
                </div>
            </div>
        </div>
    )
}


Politicas.getInitialProps = async ({ req }) => {
    const [data] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/9`).then((r) => r.json()),
    ]);

    return {
        data,
    };
};

export default Politicas;

