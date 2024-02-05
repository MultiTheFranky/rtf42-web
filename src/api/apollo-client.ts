import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const isDev = process.env.NODE_ENV === 'development';

const client = new ApolloClient({
  uri: isDev ? 'http://localhost:3000/graphql' : 'https://your-website.com/graphql', //TODO: Add your website URL from environment variables
  cache: new InMemoryCache(),
});

export default client;