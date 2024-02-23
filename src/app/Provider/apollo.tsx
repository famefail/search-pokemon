'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

