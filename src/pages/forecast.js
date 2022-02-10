import fs from "fs";
import path from "path";
import Link from "next/link";
import { useEffect } from "react";
import Card from "../components/Card";
import weatherMeta from "../static/weatherMeta";
import {
  THEME_COLD,
  THEME_NEUTRAL,
  useAppContext
} from "../context/AppContextProvider";

import HumidityIcon from "../icons/HumidityIcon";
import EyeIcon from "../icons/EyeIcon";
import PressureIcon from "../icons/PressureIcon";
import SunIcon from "../icons/SunIcon";
import CloudIcon from "../icons/CloudIcon";
import WindIcon from "../icons/WindIcon";
import Head from "next/head";
import DataPoint from "../components/DataPoint";

export async function getServerSideProps(context) {
  let { lat, lon, address } = context.query;

  // If there's no lat lon && no address, redirect
  if ((!lat || !lon) && !address) {
    return {
      redirect: {
        permanent: false,
        destination: "https://www.youtube.com/watch?v=Nj2U6rhnucI"
      }
    };
  }

  // let resData;

  if (lat & lon) {
    // Get weather data. If query is successful, set resData.
    // const res = await fetch(
    //   `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}`
    // );
    // resData = await res.json();
  } else {
    // Geocode the address.
    // https://api.mapbox.com/geocoding/v5/mapbox.places/Istanbul.json?limit=1&access_token=pk.eyJ1IjoiY3JlYXRvcng2NCIsImEiOiJja3poN2x0am4ybnRjMnVvMWNlbnczYzl1In0.0Y53cqDfe4iKA_l8TKgZfQ
    // If geocoding is successful, get weather data based on coords.
    // If query is successful, set resData.
  }

  // Load dummy response from local file to preserve API rate limit.
  const resData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "dummy-weather.json"))
  );

  const weatherData = {
    location: `${resData.location.name}, ${resData.location.region}, ${resData.location.country}`,
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
  let { Icon, NightIcon } = weatherMeta.find(
    (item) => weatherData.weatherCode === item.code
  );
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
    isDay
  } = weatherData;

  console.log(weatherData);

  useEffect(() => {
    let theme = THEME_NEUTRAL;
    if (weatherData.temperature < 20) {
      theme = THEME_COLD;
    } else {
      theme = THEME_WARM;
    }
    setTheme(theme);
  }, [setTheme, weatherData.temperature]);

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
          <div className="flex h-full w-full flex-col items-center justify-start gap-8 sm:gap-10">
            <div>
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
            </div>

            {/* Data points */}
            <ul className="grid grid-cols-1 gap-y-6 gap-x-8 text-base text-gray-700 sm:grid-cols-2">
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
            </ul>

            {/* Manual search */}
            <p className="mt-auto text-center text-base sm:text-lg">
              <Link href="/">
                <a className="link">Get weather for another location &rarr;</a>
              </Link>
            </p>
          </div>
        </Card>

        {/* Social media action */}
        <p className="mt-12 flex items-center justify-center gap-3 text-center text-sm text-gray-500">
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
              <span>to invite people over 💃</span>
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
        </p>
      </div>
    </>
  );
}
