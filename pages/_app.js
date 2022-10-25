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
        <link rel="icon" href="./assets/img-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FC8100" />
        <meta name="description" content="Club Del Seguro" />
        <meta property="og:image" content="https://clubdelseguro.cl/assets/Logo-CDS-Original.svg" />
        <link rel="apple-touch-icon" href="./assets/img-logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="contenido">
            <NextNProgress color='#FC8100' />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
