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

export async function getServerSideProps(context) {
  // const { lat, lon } = context.query;
  // const res = await fetch(
  //   `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}`
  // );
  // const data = await res.json();

  // Load dummy response from local file to preserve API rate limit.
  const data = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "dummy.json"))
  );

  const weatherData = {
    location: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
    observationTime: data.current.observation_time,
    temperature: data.current.temperature,
    description: data.current.weather_descriptions[0],
    windSpeed: data.current.wind_speed,
    pressure: data.current.pressure,
    humidity: data.current.humidity,
    cloudCover: data.current.cloudcover,
    visibility: data.current.visibility,
    isDay: data.current.is_day,
    uvIndex: data.current.uv_index,
    weatherCode: data.current.weather_code
  };

  return {
    props: {
      weatherData
    }
  };
}

export default function ForecastPage({ weatherData }) {
  const { setTheme } = useAppContext();
  let { Icon } = weatherMeta.find(
    (item) => weatherData.weatherCode === item.code
  );
  const {
    temperature,
    description,
    humidity,
    cloudCover,
    uvIndex,
    visibility,
    windSpeed,
    pressure
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
        <div>
          <p className="flex items-center justify-center space-x-3">
            <Icon className="h-20 w-20" />
            <span className="text-7xl font-bold">
              <span>{temperature}</span>
              <sup className="text-4xl font-medium">°C</sup>
            </span>
          </p>
          <p className="mt-3 text-center font-bold">{description}</p>
        </div>

        <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-base text-gray-700">
          <li className="space-x-2">
            <HumidityIcon className="h-6 w-6" />{" "}
            <span>
              <span className="font-bold">{humidity}%</span> humidity
            </span>
          </li>
          <li className="space-x-2">
            <CloudIcon className="h-6 w-6" />{" "}
            <span>
              <span className="font-bold">{cloudCover}%</span> cloud cover
            </span>
          </li>
          <li className="space-x-2">
            <EyeIcon className="h-6 w-6" />{" "}
            <span>
              <span className="font-bold">{visibility} km</span> visibility
            </span>
          </li>
          <li className="space-x-2">
            <WindIcon className="h-6 w-6" />{" "}
            <span>
              <span className="font-bold">{windSpeed} km/h</span> wind speed
            </span>
          </li>
          <li className="space-x-2">
            <PressureIcon className="h-6 w-6" />{" "}
            <span>
              <span className="font-bold">{pressure} mbar</span> pressure
            </span>
          </li>
          <li className="space-x-2">
            <SunIcon className="h-6 w-6" />{" "}
            <span>
              <span className="font-bold">{uvIndex} UV</span> index
            </span>
          </li>
        </ul>
        <p className="mt-auto text-center text-lg">
          <Link href="/">
            <a className="link">Get weather for another location &rarr;</a>
          </Link>
        </p>
      </Card>

      <p className="text-center">The suggested activity goes here</p>
    </div>
  );
}
