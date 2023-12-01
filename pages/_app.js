import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/theme';
import Head from "next/head";
import { Footer } from '../components/Footer';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="https://clubdelseguro.cl/assets/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF521B" />
        <meta name="description" content="Club Del Seguro" />
        <meta property="og:image" content="https://clubdelseguro.cl/assets/Logo-CDS-Original.svg" />
        <link rel="apple-touch-icon" href="https://clubdelseguro.cl/assets/img-logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        {/* Google tag (gtag.js) */}

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJWJWCS');`,
          }}
        />
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJWJWCS"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      <body>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="contenido">
              <NextNProgress color='#FF521B' />
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </>
  )
}

export default MyApp
