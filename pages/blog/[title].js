import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { quitarAcentos } from "../../utils/constants";
import styles from '../../styles/blog.module.css';
import ReactHtmlParser from 'react-html-parser';
import ReactMarkdown from "react-markdown";
import { CarouselBlogs } from "../../components/CarouselBlogs";
import { CotizaAhoraConNosotros } from "../../components/CotizaAhoraConNosotros";
import Head from 'next/head'

function Blog({ blogs }) {
    const router = useRouter()
    const { title } = router.query

    const [blog, setBlog] = useState(null);
    const [respuesta, setRespuesta] = useState(null);

    useEffect(() => {
        const blogSearch = blogs.find(val => quitarAcentos(val.title) === title);
        setBlog(blogSearch);
        if (!blogSearch) {
            setEncontrado(false);
        }

        if (blogSearch.ContentHTML) {
            setRespuesta(ReactHtmlParser(blogSearch.ContentHTML));
        } else {
            setRespuesta(<ReactMarkdown >
                {blogSearch.content}
            </ReactMarkdown>)
        }
    }, [blogs, title])

    useEffect(() => {
        var links = document.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            links[i].target = '_blank';
        }
    }, [blog])

    return (
        <div className="body" style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <Head>
                <title>{blog?.titlePage} Club del Seguro</title>
                <meta name="description" content={blog?.meta} />
            </Head>
            <NavBar />
            <div className={styles.imgHeaderBlog}>
            </div>
            <div className={styles.rootBlog}>
                <h1 className={styles.titleBlog}>{blog?.title}</h1>
                <div className={styles.contentContainerBlog}>
                    <div className={styles.contentContainerBlog}>{ReactHtmlParser(blog?.description)}</div>
                </div>
                <div className={styles.descriptionBlog}>
                    {respuesta}
                </div>
            </div>
            <CarouselBlogs blogs={blogs} />
            <CotizaAhoraConNosotros />
        </div>
    )
}

Blog.getInitialProps = async ({ req }) => {
    const [blogs] = await Promise.all([
        fetch(`https://strapi.clubdelseguro.cl/blogs`).then((r) => r.json()),
    ]);

    return {
        blogs,
    };
};


export default Blog;

