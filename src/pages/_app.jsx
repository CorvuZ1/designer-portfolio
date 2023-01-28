import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import "@/styles/initial.scss";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
