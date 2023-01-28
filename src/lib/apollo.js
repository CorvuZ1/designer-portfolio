import { ApolloClient, InMemoryCache } from "@apollo/client";

const { NEXT_PUBLIC_WORDPRESS_API_URL } = process.env;

export const client = new ApolloClient({
  uri: `${NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  cache: new InMemoryCache({
    resultCaching: false
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache"
    },
    query: {
      fetchPolicy: "no-cache"
    }
  }
});
