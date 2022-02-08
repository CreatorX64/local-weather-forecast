import {
  THEME_NEUTRAL,
  THEME_COLD,
  THEME_WARM
} from "../context/AppContextProvider";

const weatherCodes = [
  {
    code: 113,
    name: "sunny",
    icon: "",
    theme: THEME_WARM
  },
  {
    code: 116,
    name: "partly cloudy",
    icon: "",
    theme: THEME_WARM
  },
  {
    code: 119,
    name: "cloudy",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 122,
    name: "overcast",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 143,
    name: "mist",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 176,
    name: "patchy rain possible",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 179,
    name: "patchy snow possible",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 182,
    name: "patchy sleet possible",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 185,
    name: "patchy freezing drizzle possible",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 200,
    name: "thundery outbreaks possible",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 227,
    name: "blowing snow",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 230,
    name: "blizzard",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 248,
    name: "fog",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 260,
    name: "freezing fog",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 263,
    name: "patchy light drizzle",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 266,
    name: "light drizzle",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 281,
    name: "freezing drizzle",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 284,
    name: "heavy freezing drizzle",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 293,
    name: "patchy light rain",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 296,
    name: "light rain",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 299,
    name: "moderate rain at times",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 302,
    name: "moderate rain",
    icon: "",
    theme: THEME_NEUTRAL
  },
  {
    code: 305,
    name: "heavy rain at times",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 308,
    name: "heavy rain",
    icon: "",
    theme: THEME_COLD
  },
  {
    code: 311,
    name: "light freezing rain",
    icon: "",
    theme: THEME_COLD
  }
];

export default weatherCodes;
