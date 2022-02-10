import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../context/AppContextProvider";

export default function Layout({ children }) {
  const { theme } = useAppContext();

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
