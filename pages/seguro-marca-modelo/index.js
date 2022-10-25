import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import Head from 'next/head';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CardMarca } from '../../components/CardMarca';
import { CardMarcaIcon } from '../../components/CardMarcaIcon';
import { useEffect, useState } from 'react';
import styles from '../../styles/seguro-marca-modelo.module.css';

function Marcas({ data, benefits, brands }) {
    const [results, setResults] = useState([]);
    const [brandsFilteres, setBrandsFilteres] = useState([]);
    useEffect(() => {
        const brandsSort = brands.sort(function (a, b) {
            var n = a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
            return n === 0 && a.name !== b.name ? b.name.localeCompare(a.name) : n;
        });
        setResults(brandsSort);
        setBrandsFilteres(brandsSort);
    }, [brands]);

    const searchBrand = (data) => {
        if (searchBrand.length) {
            const resultado = brandsFilteres.filter((a) => a.name.toLowerCase().includes(data.toLowerCase()));
            setResults(resultado);
        } else {
            setResults(brandsFilteres);
        }
    }

    return (
        <div className={styles.rootMarcasPage}>
            <Head>
                <title>{data?.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.meta} />
            </Head>
            <div className={styles.headerMarcasPage}>
                <div className={styles.containerHeaderRegiones}>
                    <h1 className={styles.titleContainerHeaderRegiones}>{data?.data.title}</h1>
                    <p className={styles.descriptionContainerHeaderRegiones}>{data?.data.description}</p>
                </div>
            </div>
            <NavBar />
            <div className={styles.bodyMarcasPage}>
                <div className={styles.contentBodyMarcasPage}>
                    <div className={styles.headerContentBodyMarcasPage}>
                        <a href="https://cotizador.clubdelseguro.cl/" className={styles.cotizaAhoraMarcasPage} target="_blank" rel="noreferrer">
                            Cotiza Ahora
                        </a>
                        <input className={styles.buscarMarcasPage} onChange={e => searchBrand(e.target.value)} placeholder="Encuentra tu Auto:" />
                    </div>
                    <div className={styles.bodyContentBodyMarcasPage}>
                        {
                            results.map(brand => (
                                <CardMarcaIcon key={brand.id} brand={brand} />
                            ))
                        }
                    </div>
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

Marcas.getInitialProps = async ({ req }) => {
    const [data, benefits, brands] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/7`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/benefits`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/brands`).then((r) => r.json()),
    ]);

    return {
        data,
        benefits,
        brands,
    };
};

export default Marcas;
