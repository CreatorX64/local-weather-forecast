import { useState, useEffect } from "react";

/*
  State:
    - isLoading => True when awaiting user permission, false otherwise.
    - error => Error string when there's error, null otherwise.
    - location => Location object when available, null otherwise.
  
  Props:
    - abort => True if component should abort getting the location if
      there's no current permission, i.e. get the location if user gave
      permission before, don't ask for new permission.
*/
export default function useLocation({ abort = false } = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
    } else {
      setIsLoading(true);

      // If there's no current permission AND abort prop is true, set loading
      // state to false and set location state to null. I use "?." to use
      // Permissions API because iOS devices don't support it.
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((permissionStatus) => {
            if (permissionStatus.state !== "granted" && abort) {
              setIsLoading(false);
              setLocation(null);
            } else {
              navigator.geolocation.getCurrentPosition(success, error);
            }
          });
      } else if (!abort) {
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }

    function success(position) {
      setIsLoading(false);
      setLocation(position);
    }

    function error() {
      setIsLoading(false);
      setError("You're gonna make this harder than it should be, aren't ya?");
    }
  }, [abort]);

  return { isLoading, error, location };
}
