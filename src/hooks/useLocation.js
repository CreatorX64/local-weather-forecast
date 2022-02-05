import { useState, useEffect } from "react";

export default function useLocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    function success(position) {
      setIsLoading(false);
      setLocation(position);
    }

    function error() {
      setIsLoading(false);
      setError("Unable to retrieve your location.");
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  return { isLoading, error, location };
}
