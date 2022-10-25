import { NavBar } from "../../components/NavBar";
import styles from '../../styles/aseguradoras.module.css';
import _ from 'lodash';
import Head from 'next/head'
import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { CarouselBlogs } from '../../components/CarouselBlogs';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardsSeguroAutomotriz } from "../../components/CardsSeguroAutomotriz";

function Compania({ blogs, companies }) {
    const [company, setCompany] = useState(null);

    const router = useRouter();
    const { name } = router.query

    useEffect(() => {
        const lastword = name.split("-")[0];
        const companyResult = companies.find(val => val.name.toLowerCase() === lastword);
        setCompany(companyResult);
    }, [companies, name])


    return (
        <div className="body">
            <Head>
                <title>{company?.titlePage} Club del Seguro</title>
                <meta name="description" content={company?.meta} />
            </Head>
            <div className={styles.rootHeaderCompany}>
                <NavBar />
                <div className={styles.containerHeaderCompany}>
                    <div className={styles.headerContainerCompany}>
                        <img loading="lazy" className={styles.imgHeaderContainerCompany} src={company?.logo.url} alt="Logo compañia" />
                        <div className={styles.titleHeaderContainerCompany}>
                            <h1 className={styles.titleContainerCompany} style={{ color: `${company?.color}` }}>{company?.titleHeader}</h1>
                            <h3 className={styles.subtitleContainerCompany} style={{ color: `${company?.color}` }}>{company?.SubTitleHeader}</h3>
                        </div>
                    </div>
                    <div className={styles.bottomContainerCompany}>
                        <p className={styles.textBottomContainerCompany} style={{ color: `${company?.color}` }}>{company?.DescriptionHeader}</p>
                    </div>
                </div>
            </div>
            <div className={styles.companyPage}>
                <div className={styles.rootCompany}>
                    <div className={styles.containerTitleCompany}>
                        <div className={styles.titleCompany} style={{ color: `${company?.color}` }}>
                            <b style={{ fontWeight: '700' }}>Por qué</b>
                            <h1 className={styles.titleCompany}>{company?.name} Seguros </h1>
                        </div>
                        <div className={styles.evaluacionGeneralCompany} style={{ backgroundColor: `${company?.color}` }}>
                            <span style={{ marginLeft: '10px' }}>Evaluación general:</span>
                            <img loading="lazy" style={{ marginLeft: '12px' }} src="/assets/estrella.png" alt="Estrella evaluacion" />
                            <img loading="lazy" src="/assets/estrella.png" alt="Estrella evaluacion" />
                            <img loading="lazy" src="/assets/estrella.png" alt="Estrella evaluacion" />
                            <img loading="lazy" src="/assets/estrella.png" alt="Estrella evaluacion" />
                            <img loading="lazy" style={{ marginRight: '20px' }} src="/assets/estrella.png" alt="Estrella evaluacion" />
                        </div>
                    </div>
                    <p className={styles.containerDescriptionCompany}>
                        {company?.description}
                    </p>
                </div>
            </div>
            <h2 className={styles.subtitleCompany}>Seguros y coberturas de {company?.name} Seguros</h2>
            <CardsSeguroAutomotriz color={`${company?.color}`} company={`${company?.name}`} coverages={company?.coverages} />
            <CarouselBlogs blogs={blogs} />
            <CotizaAhoraConNosotros />
        </div>
    )
}


Compania.getInitialProps = async ({ req }) => {
    const [blogs, companies] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/blogs`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/companies`).then((r) => r.json()),
    ]);

    return {
        blogs,
        companies,
    };
};

export default Compania;

