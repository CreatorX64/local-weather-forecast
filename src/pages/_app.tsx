import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
