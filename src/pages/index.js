export default function Home() {
  return (
    <div className="w-full max-w-3xl space-y-12">
      <h1 className="text-5xl font-extrabold">
        Your local <span className="text-primary-medium">weather</span>,
        <br />
        right in your <span className="text-primary-medium">browser</span>.
      </h1>

      <p>
        TV is outdated. Radio is outdated. It’s time to cut out the middleman
        and experience the web by checking out your local weather using our
        state-of-the-art weather app.
      </p>

      <div className="space-x-8 text-lg">
        <button className="rounded-full bg-primary-light px-7 py-3">
          Get started &rarr;
        </button>
        <a href="#!" className="text-gray-400 underline">
          About this project
        </a>
      </div>
    </div>
  );
}
