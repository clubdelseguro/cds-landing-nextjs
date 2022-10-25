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
