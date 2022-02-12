import PropTypes from "prop-types";

function DataPoint({ Icon, value, unit = "", text = "" } = {}) {
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

DataPoint.propTypes = {
  Icon: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  unit: PropTypes.string,
  text: PropTypes.string
};

export default DataPoint;
