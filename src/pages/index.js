import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  async function getStarted() {
    const isPermissionGranted =
      (await navigator.permissions.query({ name: "geolocation" })).state ===
      "granted";

    // If user already gave geolocation permissions before
    if (isPermissionGranted) {
      // Get current location & route to forecast page
      navigator.geolocation.getCurrentPosition((pos) => {
        router.push(
          `/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
        );
      });
    } else {
      // Route to permission page
      router.push("/get-started");
    }
  }

  return (
    <div className="w-full max-w-md space-y-8 sm:max-w-xl sm:space-y-10 lg:max-w-2xl">
      <h1 className="text-3xl font-extrabold leading-tight transition sm:text-5xl sm:leading-none">
        Your local <span className="text-primary">weather,</span>
        <br />
        right in your <span className="text-primary">browser.</span>
      </h1>

      <p>
        <span className="hidden sm:inline">
          TV is <strong>outdated</strong>. Radio is <strong>outdated</strong>.
        </span>{" "}
        It&rsquo;s time to cut out the middleman and{" "}
        <strong>experience the web</strong> by checking out your local weather
        using our <strong>state-of-the-art</strong> weather app.
      </p>

      <div className="space-x-4 text-base sm:space-y-0 sm:space-x-8 sm:text-lg">
        <a
          onClick={() => getStarted()}
          className="group focusable cursor-pointer rounded-full bg-primary-soft px-4 py-2 text-white transition hover:bg-primary sm:px-7 sm:py-3"
        >
          Get started{" "}
          <span className="inline-block transition group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
        <a
          href="https://github.com/creatorX64/local-weather-forecast"
          className="focusable text-gray-400 underline transition hover:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          About this project
        </a>
      </div>

      <div className="flex translate-y-14 space-x-4 md:translate-y-20">
        <Link href="https://www.youtube.com/watch?v=liULcRi4n24">
          <a
            className="block w-32 opacity-90 transition hover:opacity-100 focus:opacity-100 focus:outline-none md:w-36"
            target="_blank"
          >
            <Image
              src="/android.svg"
              width={143}
              height={42}
              alt="Google play download button"
              aria-label="Google play download button"
            />
          </a>
        </Link>
        <Link href="https://www.youtube.com/watch?v=2Voei9xUDWc">
          <a
            className="block w-32 opacity-90 transition hover:opacity-100 focus:opacity-100 focus:outline-none md:w-36"
            target="_blank"
          >
            <Image
              src="/apple.svg"
              width={143}
              height={42}
              alt="Apple store download button"
              aria-label="Apple store download button"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
