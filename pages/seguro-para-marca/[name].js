import { NavBar } from '../../components/NavBar';
import { CotizaAhoraConNosotros } from '../../components/CotizaAhoraConNosotros';
import Head from 'next/head';
import { ActivaTusBeneficios } from '../../components/ActivaTusBeneficios';
import { QuienesNosRespaldan } from '../../components/QuienesNosRespaldan';
import { CardMarca } from '../../components/CardMarca';
import { CardMarcaIcon } from '../../components/CardMarcaIcon';
import { useEffect, useState } from 'react';
import styles from '../../styles/seguro-marca-modelo.module.css';
import { CardModel } from '../../components/CardModel';
import { useRouter } from 'next/router';
import { quitarAcentos } from '../../utils/constants';

function Marca({ benefits, brands }) {
    const [brand, setBrand] = useState(null);

    const router = useRouter();
    const { name } = router.query

    useEffect(() => {
        const brandsFilteres = brands.find(val => quitarAcentos(val.name) === name);
        setBrand(brandsFilteres);
    }, [brands, name]);

    return (
        <div className={styles.rootMarcasPage}>
            <Head>
                <title>{brand?.titlePage} Club del Seguro</title>
                <meta name="description" content={brand?.meta} />
            </Head>
            <div className={styles.headerMarcaPage}>
                <NavBar />
                <div className={styles.containerHeaderMarca}>
                    {brand?.logo && <img loading="lazy" src={brand?.logo?.url} alt="Logo Compañia" />}
                    <div className={styles.containerTitleMarcaPage}>
                        <h1 className={styles.titleMarcaPage}>{brand?.title}</h1>
                        <p className={styles.descriptionMarcaPage}>{brand?.description}</p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#E5E5E5', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className={styles.bodyMarcaPage}>
                    {
                        brand?.models.map(model => (
                            <CardModel key={model.id} name={model.name} brand={brand?.title} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.bodyRegionesPage}>
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

Marca.getInitialProps = async ({ req }) => {
    const [benefits, brands] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/benefits`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/brands`).then((r) => r.json()),
    ]);

    return {
        benefits,
        brands,
    };
};

export default Marca;
