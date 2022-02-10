// import fs from "fs";
// import path from "path";
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

// https://api.mapbox.com/geocoding/v5/mapbox.places/Istanbul.json?limit=1&access_token=pk.eyJ1IjoiY3JlYXRvcng2NCIsImEiOiJja3poN2x0am4ybnRjMnVvMWNlbnczYzl1In0.0Y53cqDfe4iKA_l8TKgZfQ

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

  let resData;

  if (lat & lon) {
    // Get weather data.
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}`
    );

    // If query is successful, set resData.
    resData = await res.json();
  } else {
    // Geocode the address.
    // If geocoding is successful, get weather data based on coords.
    // If query is successful, set resData.
  }

  // Load dummy response from local file to preserve API rate limit.
  // const resData = JSON.parse(
  //   fs.readFileSync(path.join(process.cwd(), "dummy.json"))
  // );

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
  const { setTheme } = useAppContext();
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
    <div className="w-full">
      <Card>
        <div className="flex h-full w-full flex-col items-center justify-start gap-8 sm:gap-10">
          <div>
            <p className="flex items-center justify-center space-x-3">
              {isDay ? (
                <Icon className="h-12 w-12 sm:h-20 sm:w-20" />
              ) : (
                <NightIcon className="h-12 w-12 sm:h-20 sm:w-20" />
              )}
              <span className="text-5xl font-bold sm:text-7xl">
                <span>{temperature}</span>
                <sup className="text-2xl font-medium">°C</sup>
              </span>
            </p>
            <p className="mt-3 text-center font-bold">{description}</p>
            <p className="text-center text-sm text-gray-400">{location}</p>
          </div>

          <ul className="grid grid-cols-1 gap-y-6 gap-x-8 text-base text-gray-700 sm:grid-cols-2">
            <li className="space-x-2">
              <HumidityIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <span>
                <span className="font-bold">{humidity}%</span> humidity
              </span>
            </li>
            <li className="space-x-2">
              <CloudIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <span>
                <span className="font-bold">{cloudCover}%</span> cloud cover
              </span>
            </li>
            <li className="space-x-2">
              <EyeIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <span>
                <span className="font-bold">{visibility} km</span> visibility
              </span>
            </li>
            <li className="space-x-2">
              <WindIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <span>
                <span className="font-bold">{windSpeed} km/h</span> wind speed
              </span>
            </li>
            <li className="space-x-2">
              <PressureIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <span>
                <span className="font-bold">{pressure} mbar</span> pressure
              </span>
            </li>
            <li className="space-x-2">
              <SunIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <span>
                <span className="font-bold">{uvIndex}</span> UV index
              </span>
            </li>
          </ul>
          <p className="mt-auto text-center text-base sm:text-lg">
            <Link href="/">
              <a className="link">Get weather for another location &rarr;</a>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
