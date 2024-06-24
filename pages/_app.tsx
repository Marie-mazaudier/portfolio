import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import Layout from '@/components/templates/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <ApolloProvider client={client}>
       <Layout className="z-[999999999]">
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

