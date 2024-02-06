import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
  uri: import.meta.env.SECRET_BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;