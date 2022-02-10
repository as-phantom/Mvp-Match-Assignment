import { useCurrentUser } from 'hooks/useCurrentUser';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Loader from 'src/components/atoms/common/Loader';
import Layout from 'src/components/organisms/common/Layout';
import Nav from 'src/components/organisms/common/Nav';
import Providers from 'src/components/organisms/common/Providers';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  const currentUser = useCurrentUser();

  return (
    <Providers>
      <Head>
        <title>MVP Match</title>
        <meta name="description" content="MVP Match assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {currentUser ? (
        <>
          <Nav currentUser={currentUser} />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Loader />
      )}
    </Providers>
  );
}

export default App;
