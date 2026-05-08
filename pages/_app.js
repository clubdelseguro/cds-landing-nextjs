import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";
import Head from "next/head";
import Script from "next/script";
import { Footer } from "../components/Footer";
import NextNProgress from "nextjs-progressbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF521B" />
        <meta name="description" content="Club Del Seguro" />
        <meta
          property="og:image"
          content="https://clubdelseguro.cl/assets/Logo-CDS-Original.svg"
        />
        <link
          rel="apple-touch-icon"
          href="https://clubdelseguro.cl/assets/img-logo.svg"
        />
      </Head>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJWJWCS');`,
        }}
      />
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="contenido">
            <NextNProgress color="#FF521B" />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
      {/*  <a href="https://wa.me/+56953793717" className="whatsapp" target="_blank" rel="noreferrer"> <i className="fab fa-whatsapp"></i></a>*/}
    </>
  );
}

export default MyApp;
