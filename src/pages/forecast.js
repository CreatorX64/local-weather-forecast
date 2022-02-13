// import fs from "fs";
// import path from "path";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

import Card from "../components/Card";
import DataPoint from "../components/DataPoint";
import { geocodeAddress, getForecast } from "../lib/weather";
import AppError from "../lib/AppError";
import weatherMeta from "../static/weatherMeta";
import {
  THEME_COLD,
  THEME_NEUTRAL,
  useAppContext
} from "../context/AppContextProvider";
import { fadeInUpParent, fadeInUpChild, fadeInUp } from "../static/animation";

import HumidityIcon from "../icons/HumidityIcon";
import EyeIcon from "../icons/EyeIcon";
import PressureIcon from "../icons/PressureIcon";
import SunIcon from "../icons/SunIcon";
import CloudIcon from "../icons/CloudIcon";
import WindIcon from "../icons/WindIcon";

export async function getServerSideProps(context) {
  let { lat, lon, address } = context.query;

  // If there's no lat lon AND no address...
  if ((!lat || !lon) && !address) {
    return {
      redirect: {
        permanent: false,
        destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    };
  }

  let resData;

  if (lat & lon) {
    try {
      resData = await getForecast(lat, lon);
    } catch (error) {
      const destination =
        error instanceof AppError
          ? `/error?message=${error.message}`
          : "/error";

      return {
        redirect: {
          permanent: false,
          destination
        }
      };
    }
  } else {
    // Geocode the address.
    try {
      [lat, lon] = await geocodeAddress(address);
    } catch (error) {
      const destination =
        error instanceof AppError
          ? `/error?message=${error.message}`
          : "/error";

      return {
        redirect: {
          permanent: false,
          destination
        }
      };
    }

    // Geocoding is successful, get weather data based on coords.
    try {
      resData = await getForecast(lat, lon);
    } catch (error) {
      const destination =
        error instanceof AppError
          ? `/error?message=${error.message}`
          : "/error";

      return {
        redirect: {
          permanent: false,
          destination
        }
      };
    }
  }

  // Load dummy response from local file to preserve API rate limit.
  // const resData = JSON.parse(
  //   fs.readFileSync(path.join(process.cwd(), "dummy-weather.json"))
  // );

  const weatherData = {
    location: `${resData.location.region}, ${resData.location.country}`,
    observationTime: resData.current.observation_time,
    temperature: resData.current.temperature,
    description: resData.current.weather_descriptions[0],
    windSpeed: resData.current.wind_speed,
    pressure: resData.current.pressure,
    humidity: resData.current.humidity,
    cloudCover: resData.current.cloudcover,
    visibility: resData.current.visibility,
    isDay: resData.current.is_day !== "no",
    uvIndex: resData.current.uv_index,
    weatherCode: resData.current.weather_code
  };

  return {
    props: {
      weatherData
    }
  };
}

export default function ForecastPage({ weatherData }) {
  const { theme, setTheme } = useAppContext();

  const {
    temperature,
    description,
    humidity,
    cloudCover,
    location,
    uvIndex,
    visibility,
    windSpeed,
    pressure,
    weatherCode,
    isDay
  } = weatherData;

  let { Icon, NightIcon } = weatherMeta.find(
    (item) => weatherCode === item.code
  );

  useEffect(() => {
    let theme = THEME_NEUTRAL;
    if (temperature < 20) {
      theme = THEME_COLD;
    } else {
      theme = THEME_WARM;
    }
    setTheme(theme);
  }, [setTheme, temperature]);

  return (
    <>
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>

      <div className="w-full">
        <Card>
          <motion.div
            className="flex h-full w-full flex-col items-center justify-start gap-8 sm:gap-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUpParent}
          >
            <motion.div variants={fadeInUpChild}>
              {/* Weather icon */}
              <p className="flex items-center justify-center space-x-3">
                {isDay ? (
                  <Icon className="h-12 w-12 sm:h-20 sm:w-20" />
                ) : (
                  <NightIcon className="h-12 w-12 sm:h-20 sm:w-20" />
                )}

                {/* Temperature */}
                <span className="flex items-start text-5xl font-bold sm:text-7xl">
                  <span>{temperature}</span>
                  <span className="text-2xl font-medium">°C</span>
                </span>
              </p>

              {/* Description & location */}
              <p className="mt-3 text-center font-bold">{description}</p>
              <p className="text-center text-sm text-gray-400">{location}</p>
            </motion.div>

            {/* Data points */}
            <motion.ul
              className="grid grid-cols-1 gap-y-6 gap-x-8 text-base text-gray-700 sm:grid-cols-2"
              variants={fadeInUpChild}
            >
              <DataPoint
                Icon={HumidityIcon}
                value={humidity}
                unit="%"
                text="humidity"
              />
              <DataPoint
                Icon={CloudIcon}
                value={cloudCover}
                unit="%"
                text="cloud cover"
              />
              <DataPoint
                Icon={EyeIcon}
                value={visibility}
                unit="km"
                text="visibility"
              />
              <DataPoint
                Icon={WindIcon}
                value={windSpeed}
                unit="km/h"
                text="wind speed"
              />
              <DataPoint
                Icon={PressureIcon}
                value={pressure}
                unit="mbar"
                text="pressure"
              />
              <DataPoint Icon={SunIcon} value={uvIndex} text="UV index" />
            </motion.ul>

            {/* Manual search */}
            <motion.p
              className="mt-auto text-center text-base sm:text-lg"
              variants={fadeInUpChild}
            >
              <Link href="/manual-search">
                <a className="link">Get weather for another location &rarr;</a>
              </Link>
            </motion.p>
          </motion.div>
        </Card>

        {/* Social media action */}
        <motion.p
          className="mt-12 hidden items-center justify-center gap-3 text-center text-sm text-gray-500 opacity-0 sm:flex"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {theme === THEME_COLD ? (
            <>
              <span>Guess there’ll be no going out today!</span>{" "}
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-text="The weather seems awful today! Who wants to come over?"
                data-url="http://localhost:3000"
                data-via="creatorX64"
                data-show-count="false"
              >
                Tweet
              </a>
              <span>to invite people over 🎉</span>
            </>
          ) : (
            <>
              <span>Looks like a nice day to hang out!</span>{" "}
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-text="The weather seems nice today! Who wants to hang out?"
                data-url="http://localhost:3000"
                data-via="creatorX64"
                data-show-count="false"
              >
                Tweet
              </a>
              <span>to let your friends know 🎉</span>
            </>
          )}
        </motion.p>
      </div>
    </>
  );
}
