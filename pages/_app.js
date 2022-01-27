import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <title>
          EVERSOME | Lagetexte einfach, schnell und individuell in Ihr Postfach
        </title>
        <meta
          name="Description"
          content="Anhand unserer riesigen Geodatenbank generieren wir mittels künstlicher Intelligenz hochwertige und individuelle Lagetexte für jede Adresse Deutschlands und schicken sie Ihnen innerhalb weniger Minuten per E-Mail."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
