import { useEffect, useState } from "react";
import { GridBlogs } from "../../components/GridBlogs";
import { NavBar } from "../../components/NavBar";
import styles from '../../styles/blogs.module.css';
import _ from 'lodash';
import Head from 'next/head'

function Blogs({ data, blogs }) {
    const [page, setPage] = useState(1);
    const [blogsChunk, setBlogsChunk] = useState([]);

    useEffect(() => {
        const dataChunk = _.chunk(blogs, 14)
        setBlogsChunk(dataChunk);
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);


    return (
        <div className="body" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Head>
                <title>{data?.data.titlePage} Club del Seguro</title>
                <meta name="description" content={data?.data.meta} />
            </Head>
            <NavBar />
            <div className={styles.imgHeaderBlogs}>
            </div>
            <div className={styles.containerTitleHeaderBlogs}>
                <h1 className={styles.titleBlogs}>{data?.data.title}</h1>
                <p className={styles.descriptionBlogs}>{data?.data.description}</p>
            </div>
            <div className={styles.containerBodyBlogs}>
                <div className={styles.paginatorBlogs}>
                    <b>Página:</b>
                    {
                        blogsChunk.map((val, i) => <button key={i} className={`item-paginator-blogs ${i + 1 === page ? 'selected-item-paginator-blogs' : ''}`} onClick={e => setPage(i + 1)}> {i + 1} </button>)
                    }
                </div>
                <div className={styles.bodyBlogs}>
                    {blogsChunk.length && <GridBlogs data={blogsChunk[page - 1]} />}
                </div>
            </div>
        </div>
    )
}


Blogs.getInitialProps = async ({ req }) => {
    const [data, blogs] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/pages/5`).then((r) => r.json()),
        fetch(`https://strapi.clubdelseguro.cl/blogs`).then((r) => r.json()),
    ]);

    return {
        data,
        blogs,
    };
};

export default Blogs;

