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
    <div>
      <p>This is the forecast page</p>
    </div>
  );
}
