import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useLocation from "../hooks/useLocation";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function GetStartedPage() {
  const { isLoading, error, location } = useLocation();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && location) {
      const { latitude, longitude } = location.coords;
      router.replace(`/forecast?lat=${latitude}&lon=${longitude}`);
    }
  }, [location, router, isLoading]);

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
