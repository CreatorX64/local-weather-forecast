import Link from "next/link";
import useForecast from "../hooks/useForecast";
import Card from "../components/Card";
import Loader from "../components/Loader";

export default function ForecastPage() {
  const { loading, fetching, error, forecast } = useForecast();

  return (
    <Card>
      <div className="flex h-full w-full items-center justify-center">
        {loading && (
          <div className="space-y-8">
            <Loader className="mx-auto h-20 w-20" />
            <p className="font-medium">
              Please give permission to location services...
            </p>
          </div>
        )}

        {fetching && (
          <div className="space-y-8">
            <Loader className="mx-auto h-20 w-20" />
            <p className="font-medium">Fetching your local weather...</p>
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

        {forecast && (
          <div>
            <p>Your forecast:</p>
            <p>{forecast}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
