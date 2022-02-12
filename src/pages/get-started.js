import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useLocation from "../hooks/useLocation";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Image from "next/image";

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
          <div className="space-y-8 py-12">
            <Loader className="mx-auto h-14 w-14 sm:h-20 sm:w-20" />
            <p className="text-center font-medium">
              Please give permission to location services.
            </p>
          </div>
        )}

        {error && (
          <div className="space-y-8">
            <div className="relative h-[220px] w-full overflow-hidden rounded-lg sm:h-[250px]">
              <Image
                src="/wot.gif"
                layout="fill"
                alt="This is a waste of time"
                className="object-contain"
              />
            </div>
            <p className="text-center font-medium">{error}</p>
            <Link href="/manual-search">
              <a className="link mt-4 block text-center">
                Enter location manually &rarr;
              </a>
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}
