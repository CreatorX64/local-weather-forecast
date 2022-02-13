import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useLocation from "../hooks/useLocation";
import { fadeInUpParent, fadeInUpChild } from "../static/animation";

export default function HomePage() {
  const { location, isLoading } = useLocation({ abort: true });
  const [getStartedUrl, setGetStartedUrl] = useState("/get-started");

  useEffect(() => {
    if (!isLoading && !location) {
      // There's no current permission, route the user to the Get Started
      // page on action click.
      setGetStartedUrl("/get-started");
    } else if (!isLoading && location) {
      // There's current permission, so use the current location instead of
      // going to the "Get Started" page. This prevents user from seeing a millisecond
      // flash of the permission page, which is unpleasant.
      setGetStartedUrl(
        `/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
    }
  }, [isLoading, location]);

  return (
    <motion.div
      className="w-full max-w-md space-y-8 text-center sm:max-w-xl sm:space-y-10 sm:text-left lg:max-w-2xl"
      initial="hidden"
      animate="visible"
      variants={fadeInUpParent}
    >
      <motion.h1
        className="text-3xl font-extrabold leading-tight transition sm:text-5xl sm:leading-none"
        variants={fadeInUpChild}
      >
        Your local <span className="text-primary">weather,</span>
        <br />
        right in your <span className="text-primary">browser.</span>
      </motion.h1>

      <motion.p variants={fadeInUpChild}>
        <span className="hidden sm:inline">
          TV is <strong>outdated</strong>. Radio is <strong>outdated</strong>.
        </span>{" "}
        It&rsquo;s time to cut out the middleman and{" "}
        <strong>experience the web</strong> by checking out your local weather
        using our <strong>state-of-the-art</strong> weather app.
      </motion.p>

      <motion.div
        className="space-x-4 text-base sm:space-y-0 sm:space-x-8 sm:text-lg"
        variants={fadeInUpChild}
      >
        <Link href={getStartedUrl}>
          <a className="group focusable cursor-pointer rounded-full bg-primary-soft px-4 py-2 text-white transition hover:bg-primary sm:px-7 sm:py-3">
            Get started{" "}
            <span className="inline-block transition group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </Link>
        <a
          href="https://github.com/creatorX64/local-weather-forecast"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          About this project
        </a>
      </motion.div>

      <motion.div
        className="mt-36 flex justify-center space-x-4 sm:justify-start md:translate-y-20"
        variants={fadeInUpChild}
      >
        <Link href="https://www.youtube.com/watch?v=liULcRi4n24">
          <a
            className="block w-32 opacity-80 transition hover:opacity-100 focus:opacity-100 focus:outline-none md:w-36"
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
            className="block w-32 opacity-80 transition hover:opacity-100 focus:opacity-100 focus:outline-none md:w-36"
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
      </motion.div>
    </motion.div>
  );
}
