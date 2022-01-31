import Head from "next/head";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Find your weather forecast right inside your browser."
        />
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Layout page</h1>

        {children}
      </div>
    </>
  );
};

export default Layout;
