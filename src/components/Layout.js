import Head from "next/head";

export default function Layout({ children }) {
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

      <main className="hero flex min-h-screen items-center justify-center bg-[length:200px,300px] p-6 font-primary text-xl text-gray-800 sm:bg-[length:400px,600px]">
        {children}
      </main>
    </>
  );
}
