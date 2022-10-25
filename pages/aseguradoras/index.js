import { NavBar } from "../../components/NavBar";
import styles from '../../styles/aseguradoras.module.css';
import _ from 'lodash';
import Head from 'next/head'
import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import { CarouselBlogs } from '../../components/CarouselBlogs';
import Link from "next/link";

function Companias({ data, blogs, companies }) {

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.rootHeaderAseguradoras}>
                <div className={styles.containerHeaderCompanies}>
                    <div className={styles.topContainerHeaderCompanies}>
                        <p className={styles.contentTopContainerHeaderCompanies}>{data?.data.description}
                        </p>
                    </div>
                    <div className={styles.bottomContainerHeaderCompanies}>
                        <p className={styles.contentBottomContainerHeaderCompanies}>
                            {data?.data.title}
                        </p>
                    </div>
                    <a className={styles.quieroCotizarHeaderCompanies} href="https://cotizador.clubdelseguro.cl/" target="_blank" rel="noreferrer">
                        Quiero Cotizar
                    </a>
                </div>
            </div>
            <NavBar />
            <div className="body">
                <div className={styles.rootCompaniesPage}>
                    <h2 className={styles.titleCompaniesPage}>Quienes nos <b>respaldan</b></h2>
                    <div className={styles.containerCompanies}>
                        {
                            companies.map(company => {
                                let nameUrl = company.name;
                                nameUrl = nameUrl.toLowerCase();
                                return (
                                    <div key={company.id} className={styles.companyCompanies}>
                                        <div className={styles.containerImgCompanies}>
                                            <img loading="lazy" src={company.logo.url} alt="Logo Consorcio" />
                                        </div>
                                        <Link href={`/aseguradoras/${nameUrl}-seguros`}>
                                            <div className={styles.botonCompany} style={{ backgroundColor: `${company.color}` }}>
                                                Saber más de <h2 className={styles.nameCompany}>{company.name}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <CotizaAhoraConNosotros />
                <CarouselBlogs blogs={blogs} />
            </div>
        </div>
    )
}


Companias.getInitialProps = async ({ req }) => {
    const [data, blogs, companies] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/4`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/blogs`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/companies`).then((r) => r.json()),
    ]);

    return {
        data,
        blogs,
        companies,
    };
};

export default Companias;

