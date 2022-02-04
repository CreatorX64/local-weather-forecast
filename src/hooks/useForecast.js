import { useState, useEffect } from "react";

export default function useForecast({ method = "browser" } = {}) {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    function success(position) {
      setLoading(false);

      setFetching(true);

      // Fetch user's forecast...
      setTimeout(() => {
        setFetching(false);
        setForecast("It's sunny today");
      }, 2000);
    }

    function error() {
      setLoading(false);
      setError("Unable to retrieve your location.");
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      setLoading(true);

      if (method === "browser") {
        navigator.geolocation.getCurrentPosition(success, error);
      } else if (method === "webapi") {
        // Fetch the forecast from a web api...
      }
    }
  }, [method]);

  return { loading, fetching, error, forecast };
}
