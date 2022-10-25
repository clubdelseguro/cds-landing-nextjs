import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { ImportaciaDeElegirnos } from "../../components/ImportaciaDeElegirnos";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/seguro-automotriz.module.css';
import Head from 'next/head'
import { QuienesNosRespaldan } from "../../components/QuienesNosRespaldan";
import { CardsSeguroAutomotriz } from "../../components/CardsSeguroAutomotriz";
import { ActivaTusBeneficios } from "../../components/ActivaTusBeneficios";
import { CardsEnTuRegion } from "../../components/CardsEnTuRegion";
import { CardsMarcas } from "../../components/CardsMarcas";

function SeguroAutomotriz({ data, benefits, coverages }) {
    return (
        <div className="body">
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.headerSeguroAutomotriz}>
                <NavBar />
                <div className={styles.rootContainerSeguroAutomotriz}>
                    <h1 className={styles.titleSeguroAutomotriz}>{data?.data.title}</h1>
                    <p className={styles.descriptionSeguroAutomotriz}>
                        {data?.data.description}
                    </p>
                    <a className={styles.cotizaAhoraSeguroAutomotriz} href="https://cotizador.clubdelseguro.cl/" target="_blank" rel="noreferrer">
                        Cotiza ahora
                    </a>
                </div>
            </div>
            <QuienesNosRespaldan />
            <CardsSeguroAutomotriz coverages={coverages} />
            <div className={styles.cardsBodySeguroAutomotriz}>
                <CardsEnTuRegion />
                <CardsMarcas />
            </div>
            <CotizaAhoraConNosotros />
            <ActivaTusBeneficios benefits={benefits} />
        </div>
    )
}


SeguroAutomotriz.getInitialProps = async ({ req }) => {
    const [data, benefits, coverages] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/3`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/benefits`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/coverages`).then((r) => r.json()),
    ]);

    return {
        data,
        benefits,
        coverages,
    };
};

export default SeguroAutomotriz;
