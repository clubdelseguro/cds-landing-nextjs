import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import Head from 'next/head';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CardMarca } from '../../components/CardMarca';
import { useEffect, useState } from 'react';
import styles from '../../styles/seguro-automotriz-en.module.css';
import _ from 'lodash';
import { CardComuna } from '../../components/CardComuna';
import { useRouter } from 'next/router';
import { quitarAcentos } from '../../utils/constants';


function Region({benefits, regions }) {

    const router = useRouter();
    const { name } = router.query

    const [region, setRegion] = useState(null);
    useEffect(() => {
        const regionsFiltered = regions.find((val) => `region-${quitarAcentos(val.title)}` === name);
        setRegion(regionsFiltered);
    }, [name, regions]);

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>{region?.titlePage} Club del Seguro</title>
                <meta name="description" content={region?.meta} />
            </Head>
            <div className={styles.headerRegion}>
                <div className={styles.rootContainerRegiones}>
                    <h1 className={styles.titleRegion}>Seguro Automotriz en Región {region?.title}</h1>
                    <p className={styles.descriptionRegiones}>{region?.description}</p>
                    <a href="https://cotizador.clubdelseguro.cl" target="_blank" className={styles.cotizaAhoraRegiones} rel="noreferrer">
                        Cotiza ahora
                    </a>
                </div>
            </div>
            <NavBar />
            <div className={styles.bodyComunas}>
                <h2 className={styles.titleContainerBodyComunas}>Seguro Automotriz en tu región </h2>
                <div className={styles.containerBodyComunas}>
                    {
                        region?.communes.map(commune => (
                            <CardComuna key={commune.id} name={commune.name} region={region?.name} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.bodyRegionesPage}>
                <QuienesNosRespaldan />
                <h3 className={styles.titleMarcas}>Seguro Automotriz para las principales marcas</h3>
                <div className={styles.cardsMarcasRegionesPage}>
                    <CardMarca oferta="1" img="https://cds-landing.s3.sa-east-1.amazonaws.com/image_32_f06c0cf68d.png" />
                    <CardMarca oferta="2" img="https://cds-landing.s3.sa-east-1.amazonaws.com/Group_294_87234f85a5.png" />
                    <CardMarca oferta="3" img="https://cds-landing.s3.sa-east-1.amazonaws.com/layer1_3581e81f46.png" />
                </div>
                <CotizaAhoraConNosotros />
                <ActivaTusBeneficios benefits={benefits} />
            </div>
        </div>
    )
}

Region.getInitialProps = async ({ req }) => {
    const [benefits, regions] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/benefits`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/regions`).then((r) => r.json()),
    ]);

    return {
        benefits,
        regions,
    };
};

export default Region;
