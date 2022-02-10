export default function DataPoint({ Icon, value, unit = "", text = "" } = {}) {
  return (
    <li className="space-x-1">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
      <span>
        <span className="font-bold">
          {value} {unit}
        </span>{" "}
        {text}
      </span>
    </li>
  );
}
