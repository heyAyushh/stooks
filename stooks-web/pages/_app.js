import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>Stooks</title>
      <meta property="og:title" content="Stooks web app" key="Stooks" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
