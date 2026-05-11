import Header from "./HomePage/Header";
import Body from "./HomePage/Body";
import HeaderMovil from "./HomePage/HeaderMovil";
import { Hidden } from "@mui/material";
import Head from "next/head";
// import { MetaTags } from 'react-meta-tags';

function Home({ benefits, blogs, data }) {
  const title = data?.data?.title ?? "";
  const description = data?.data?.description ?? "";
  const meta = data?.data?.meta ?? "Club Del Seguro";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Head>
        <title> Club del Seguro</title>
        <meta name="description" content={meta} />
      </Head>
      <Hidden only={["xs", "sm"]}>
        <Header title={title} description={description} />
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <HeaderMovil title={title} description={description} />
      </Hidden>
      <div className="body">
        <Body benefits={benefits} blogs={blogs} />
      </div>
    </div>
  );
}

async function safeFetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[home] fetch ${url} -> ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`[home] fetch ${url} failed:`, err?.message || err);
    return null;
  }
}

Home.getInitialProps = async () => {
  const [data, benefits, blogs] = await Promise.all([
    safeFetchJson("https://strapi.clubdelseguro.cl/pages/2"),
    safeFetchJson("https://strapi.clubdelseguro.cl/benefits"),
    safeFetchJson("https://strapi.clubdelseguro.cl/blogs"),
  ]);

  return {
    data: data ?? { data: { title: "", description: "", meta: "" } },
    benefits: Array.isArray(benefits) ? benefits : [],
    blogs: Array.isArray(blogs) ? blogs : [],
  };
};

export default Home;
