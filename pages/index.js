import Header from './HomePage/Header';
import Body from './HomePage/Body';
import HeaderMovil from './HomePage/HeaderMovil';
import { Hidden } from '@mui/material';
import Head from 'next/head'
// import { MetaTags } from 'react-meta-tags';

function Home({ benefits, blogs, data }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Head>
                <title> Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
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
    const [data, benefits, blogs] = await Promise.all([
        fetch(`${process.env.REACT_APP_DOMINIO_API}/pages/2`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/benefits`).then((r) => r.json()),
        fetch(`${process.env.REACT_APP_DOMINIO_API}/blogs`).then((r) => r.json()),
    ]);

    return {
        data,
        benefits,
        blogs
    };
};

export default Home;
