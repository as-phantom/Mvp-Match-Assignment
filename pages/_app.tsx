import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'src/components/atoms/common/Layout';
import Providers from 'src/components/atoms/common/Providers';
import Footer from 'src/components/organisms/common/Footer';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <title>MVP Match</title>
        <meta name="description" content="MVP Match assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Footer />
    </Providers>
  );
}

export default App;
