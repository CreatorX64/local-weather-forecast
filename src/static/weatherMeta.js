import { THEME_COLD, THEME_WARM } from "../context/AppContextProvider";

import CloudyIcon from "../icons/CloudyIcon";
import MistyIcon from "../icons/MistyIcon";
import PartlyCloudyIcon from "../icons/PartlyCloudyIcon";
import RainyHeavyIcon from "../icons/RainyHeavyIcon";
import RainySmallIcon from "../icons/RainySmallIcon";
import SnowIcon from "../icons/SnowIcon";
import SnowPatchyIcon from "../icons/SnowPatchyIcon";
import SunnyIcon from "../icons/SunnyIcon";
import ThunderIcon from "../icons/ThunderIcon";
import WindyIcon from "../icons/WindyIcon";
import MoonIcon from "../icons/MoonIcon";

const weatherMeta = [
  {
    code: 113,
    name: "sunny",
    Icon: SunnyIcon,
    NightIcon: MoonIcon,
    theme: THEME_WARM
  },
  {
    code: 116,
    name: "partly cloudy",
    Icon: PartlyCloudyIcon,
    NightIcon: PartlyCloudyIcon,
    theme: THEME_COLD
  },
  {
    code: 119,
    name: "cloudy",
    Icon: CloudyIcon,
    NightIcon: CloudyIcon,
    theme: THEME_COLD
  },
  {
    code: 122,
    name: "overcast",
    Icon: CloudyIcon,
    NightIcon: CloudyIcon,
    theme: THEME_COLD
  },
  {
    code: 143,
    name: "mist",
    Icon: MistyIcon,
    NightIcon: MistyIcon,
    theme: THEME_COLD
  },
  {
    code: 176,
    name: "patchy rain possible",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 179,
    name: "patchy snow possible",
    Icon: SnowPatchyIcon,
    NightIcon: SnowPatchyIcon,
    theme: THEME_COLD
  },
  {
    code: 182,
    name: "patchy sleet possible",
    Icon: SnowPatchyIcon,
    NightIcon: SnowPatchyIcon,
    theme: THEME_COLD
  },
  {
    code: 185,
    name: "patchy freezing drizzle possible",
    Icon: SnowPatchyIcon,
    NightIcon: SnowPatchyIcon,
    theme: THEME_COLD
  },
  {
    code: 200,
    name: "thundery outbreaks possible",
    Icon: ThunderIcon,
    NightIcon: ThunderIcon,
    theme: THEME_COLD
  },
  {
    code: 227,
    name: "blowing snow",
    Icon: SnowIcon,
    NightIcon: SnowIcon,
    theme: THEME_COLD
  },
  {
    code: 230,
    name: "blizzard",
    Icon: WindyIcon,
    NightIcon: WindyIcon,
    theme: THEME_COLD
  },
  {
    code: 248,
    name: "fog",
    Icon: MistyIcon,
    NightIcon: MistyIcon,
    theme: THEME_COLD
  },
  {
    code: 260,
    name: "freezing fog",
    Icon: MistyIcon,
    NightIcon: MistyIcon,
    theme: THEME_COLD
  },
  {
    code: 263,
    name: "patchy light drizzle",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 266,
    name: "light drizzle",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 281,
    name: "freezing drizzle",
    Icon: RainyHeavyIcon,
    NightIcon: RainyHeavyIcon,
    theme: THEME_COLD
  },
  {
    code: 284,
    name: "heavy freezing drizzle",
    Icon: RainyHeavyIcon,
    NightIcon: RainyHeavyIcon,
    theme: THEME_COLD
  },
  {
    code: 293,
    name: "patchy light rain",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 296,
    name: "light rain",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 299,
    name: "moderate rain at times",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 302,
    name: "moderate rain",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  },
  {
    code: 305,
    name: "heavy rain at times",
    Icon: RainyHeavyIcon,
    NightIcon: RainyHeavyIcon,
    theme: THEME_COLD
  },
  {
    code: 308,
    name: "heavy rain",
    Icon: RainyHeavyIcon,
    NightIcon: RainyHeavyIcon,
    theme: THEME_COLD
  },
  {
    code: 311,
    name: "light freezing rain",
    Icon: RainySmallIcon,
    NightIcon: RainySmallIcon,
    theme: THEME_COLD
  }
];

export default weatherMeta;
