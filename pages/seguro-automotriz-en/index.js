import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import Head from 'next/head';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CardMarca } from '../../components/CardMarca';
import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import styles from '../../styles/seguro-automotriz-en.module.css';
import { CardRegion } from '../../components/CardRegion';
import _ from 'lodash';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1
    },
    {
        width: 550,
        itemsToShow: 2
    },
    {
        width: 825,
        itemsToShow: 3
    },
]

function Regiones({ data, benefits, regions }) {
    const [regionesArray, setRegionesArray] = useState([]);
    useEffect(() => {
        setRegionesArray(_.chunk(regions, 4));
    }, [regions]);

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>{data?.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.meta} />
            </Head>
            <div className={styles.headerRegiones}>
                <div className={styles.rootContainerRegiones}>
                    <h1 className={styles.titleRegiones}>{data?.data.title}</h1>
                    <p className={styles.descriptionRegiones}>{data?.data.description}</p>
                    <a href="https://cotizador.clubdelseguro.cl" className={styles.cotizaAhoraRegiones} target="_blank" rel="noreferrer">
                        Cotiza ahora
                    </a>
                    <p className={styles.seguroAutomotrizRegiones}>
                        Seguro Automotriz en tu región
                    </p>
                </div>
            </div>
            <NavBar />
            <div className={styles.bodyRegiones}>
                <div className={styles.containerBodyRegiones}>
                    {
                        regions.map(region => (
                            <CardRegion key={region.id} region={region} />
                        ))
                    }
                </div>
                <div className={styles.carouselCardRegiones}>
                    <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true}>
                        {
                            regionesArray.map((value, i) => (
                                <div key={i}>
                                    {
                                        value.map(region => (
                                            <CardRegion key={region.id} region={region} />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Carousel>
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

Regiones.getInitialProps = async ({ req }) => {
    const [data, benefits, regions] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/pages/8`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/benefits`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/regions`).then((r) => r.json()),
    ]);

    return {
        data,
        benefits,
        regions,
    };
};

export default Regiones;
