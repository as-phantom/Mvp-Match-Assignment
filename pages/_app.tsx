import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MVP Match</title>
        <meta name="description" content="MVP Match assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default App;
