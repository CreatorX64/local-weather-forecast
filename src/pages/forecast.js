import Card from "../components/Card";

export function getServerSideProps(context) {
  const { lat, lon } = context.query;

  // Talk to the weather API to get the forecast.
  console.log(lat, lon);

  return {
    props: {}
  };
}

export default function ForecastPage() {
  return (
    <Card>
      <p>This is the forecast page</p>
    </Card>
  );
}
