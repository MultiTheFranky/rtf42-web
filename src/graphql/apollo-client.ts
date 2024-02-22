import { ApolloClient, InMemoryCache } from '@apollo/client/core';

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  if (client) return client;
  client = new ApolloClient({
    uri: import.meta.env.VITE_BACKEND_URL,
    cache: new InMemoryCache(),
  });

  return client;
}