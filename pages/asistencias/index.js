import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { NavBar } from "../../components/NavBar";
import { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import { ActivaTusBeneficiosPasos } from "../../components/ActivaTusBeneficiosPasos";
import { CardsBeneficio } from "../../components/CardsBeneficio";
import _ from 'lodash';
import styles from '../../styles/asistencias.module.css';
import Head from 'next/head'

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1
    },
    {
        width: 500,
        itemsToShow: 2
    },
    {
        width: 750,
        itemsToShow: 3
    },
    {
        width: 1000,
        itemsToShow: 4
    },
]


function Asistencias({ data, benefits }) {
    const [beneficiosArray, setBeneficiosArray] = useState([]);
    useEffect(() => {
        setBeneficiosArray(_.chunk(benefits, 2))
    }, [benefits])
    return (
        <div className="body">
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.headerAsistenciasPage}>
                <NavBar />
                <div className={styles.containerHeaderAsistencias}>
                </div>
            </div>
            <div>
                <div className={styles.containerTitleAsistencias}>
                    <h1 className={styles.titleAsistencias}>{data?.data.title}</h1>
                    <h2 className={styles.descriptionAsistencias}>{data?.data.description}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                    <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                        {
                            beneficiosArray.map((value, i) => (
                                <div key={i}>
                                    {
                                        value.map((beneficio) => (
                                            <CardsBeneficio key={beneficio.id} beneficio={beneficio} />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <ActivaTusBeneficiosPasos />
                <CotizaAhoraConNosotros />
            </div>
        </div>
    )
}

Asistencias.getInitialProps = async ({ req }) => {
    const [data, benefits] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/11`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/benefits`).then((r) => r.json()),
    ]);

    return {
        data,
        benefits,
    };
};

export default Asistencias;

