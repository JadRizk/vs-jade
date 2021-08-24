import React from 'react';
import { AppProps } from 'next/app';
import { StyledThemeProvider } from '@definitions/styled-components';
import { initializeApollo } from '@services/graphql';
import { ApolloProvider } from '@apollo/client';
import Layout from '@components/Layout/Layout';
import GlobalStyle from '@styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    return (
        <StyledThemeProvider>
            <ApolloProvider client={apolloClient}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </StyledThemeProvider>
    );
}

export default MyApp;
