import AppError from "../lib/AppError";

// Get weather data. If query is successful, set resData.
export async function getForecast(lat, lon) {
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${lat},${lon}`
  );
  const data = await res.json();

  // if(!resData.success) { ... } doesn't work, because in the success case
  // there's not "success" property in the resData making it "undefined",
  // which makes the if block run in all cases. So I exclusively check for "false".
  if (data.success === false) {
    throw new AppError(
      "Unable to connect to location services. Please try again later."
    );
  }

  return data;
}

export async function geocodeAddress(address) {
  // Geocode the address.
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?limit=1&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
  );
  const data = await res.json();

  if (!data.features) {
    throw new AppError(
      "Can't connect to geocoding services. Please try again later."
    );
  } else if (data.features.length === 0) {
    throw new AppError("Location not found");
  }

  const [lon, lat] = data.features[0].geometry.coordinates;

  return [lat, lon];
}
