import { useSelector } from "react-redux";

import CountryLists from "../components/CountryLists";

const noFilter = [
  "Germany",
  "United States of America",
  "Brazil",
  "Iceland",
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
];

const CountryList = () => {
  return <CountryLists />;
};

export default CountryList;
