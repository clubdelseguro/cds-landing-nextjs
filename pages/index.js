import { Header } from './HomePage/Header';
import { Body } from './HomePage/Body';
import { HeaderMovil } from './HomePage/HeaderMovil';
import { Hidden } from '@mui/material';
import Head from 'next/head'
// import { MetaTags } from 'react-meta-tags';

function Home({ benefits, blogs }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Head>
                <title> Club del Seguro</title>
                <meta name="description" />
            </Head>
            <Hidden only={['xs', 'sm']}>
                <Header />
            </Hidden>
            <Hidden only={['md', 'lg', 'xl']}>
                <HeaderMovil />
            </Hidden>
            <div className="body">
                <Body benefits={benefits} blogs={blogs} />
            </div>
        </div>
    )
}


Home.getInitialProps = async ({ req }) => {
    const [benefits, blogs] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/benefits`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/blogs`).then((r) => r.json()),
    ]);

    return {
        benefits,
        blogs
    };
};

export default Home;
