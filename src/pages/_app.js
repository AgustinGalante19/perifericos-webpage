import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import SSRProvider from 'react-bootstrap/SSRProvider'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {

    return (
        <SSRProvider>
            <Head>
                <title>WikiTech</title>
                <meta name="description" content="Sitio web para aprender sobre periféricos."></meta>
            </Head>
            <Component {...pageProps} />
        </SSRProvider>
    )
}
export default MyApp;