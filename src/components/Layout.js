import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useAppContext } from "../context/AppContextProvider";

function Layout({ children }) {
  const { theme } = useAppContext();
  const router = useRouter();

  let themeClass = "theme-neutral";
  switch (theme) {
    case "cold":
      themeClass = "theme-cold";
      break;
    case "warm":
      themeClass = "theme-warm";
      break;
  }

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

      {router.pathname !== "/" && (
        <Link href="/">
          <a className="absolute top-5 left-5 rounded-full bg-white px-3 py-2 font-medium text-blue-500 shadow-sm transition hover:text-blue-700 hover:shadow-lg">
            &larr; Back to home
          </a>
        </Link>
      )}

      <main
        className={`${themeClass} flex min-h-screen items-center justify-center bg-gray-50 bg-[length:200px,300px] p-4 font-primary text-base leading-relaxed text-gray-800 transition sm:bg-[length:400px,600px] sm:p-9 sm:text-xl sm:leading-loose`}
      >
        {children}
      </main>

      <Link href="https://www.youtube.com/watch?v=N70DRo8_WwA">
        <a className="absolute right-3 bottom-1" target="_blank">
          <Image src="/music.svg" width={32} height={32} alt="Music icon" />
        </a>
      </Link>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
