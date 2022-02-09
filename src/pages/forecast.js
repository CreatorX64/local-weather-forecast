import fs from "fs";
import path from "path";
import Card from "../components/Card";
import weatherMeta from "../static/weatherCodes";
import { useAppContext } from "../context/AppContextProvider";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  // const { lat, lon } = context.query;
  // const res = await fetch(
  //   `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}&units=m`
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
  const { Icon, theme } = weatherMeta.find(
    (item) => weatherData.weatherCode === item.code
  );

  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);

  console.log(weatherData);

  return (
    <Card>
      <Icon />
      <p>This is the forecast page</p>
    </Card>
  );
}
