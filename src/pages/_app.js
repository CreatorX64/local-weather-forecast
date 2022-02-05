import "../styles/globals.css";
import AppContextProvider from "../context/AppContextProvider";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
