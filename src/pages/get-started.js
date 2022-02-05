import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContextProvider";
import useLocation from "../hooks/useLocation";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function GetStartedPage() {
  const { isLoading, error, location } = useLocation();
  const router = useRouter();
  const { setLocalCoords } = useAppContext();

  useEffect(() => {
    if (!isLoading && location) {
      const { latitude, longitude } = location.coords;
      setLocalCoords({ lat: latitude, lon: longitude });
      router.replace(`/forecast?lat=${latitude}&lon=${longitude}`);
    }
  }, [location, router, isLoading, setLocalCoords]);

  return (
    <Card>
      <div className="flex h-full w-full items-center justify-center">
        {isLoading && (
          <div className="space-y-8">
            <Loader className="mx-auto h-20 w-20" />
            <p className="font-medium">
              Please give permission to location services.
            </p>
          </div>
        )}

        {error && (
          <div>
            <p>{error}</p>
            <Link href="/forecast-manual">
              <a>Enter location manually</a>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}
