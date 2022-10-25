import { CardsHelp } from "../../components/CardsHelp";
import { CarouselBlogs } from "../../components/CarouselBlogs";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/ayuda.module.css';
import Head from 'next/head'

function Ayuda({ data, blogs }) {
    return (
        <div className="body">
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <div className={styles.headerQuienesHelp}>
                <NavBar />
                <div className={styles.containerHeaderHelp}>
                </div>
            </div>
            <div className={styles.rootHelpPage}>
                <h1 className={styles.titleHelpPage}>{data?.data.title}</h1>
                <div className={styles.containerHelpPage}>
                    <p className={styles.descriptionHelpPage}>
                        {data?.data.description}
                    </p>
                </div>
            </div>
            <CardsHelp />
            <CarouselBlogs blogs={blogs} />
        </div>
    )
}


Ayuda.getInitialProps = async ({ req }) => {
    const [data, blogs] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/pages/1`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/blogs`).then((r) => r.json()),
    ]);

    return {
        data,
        blogs,
    };
};

export default Ayuda;

