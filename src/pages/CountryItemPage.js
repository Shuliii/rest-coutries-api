import BigCountryItem from "../components/BigCountryItem";
import { useParams } from "react-router-dom";

import data from "../data.json";

const CountryItemPage = () => {
  const { name } = useParams();

  const [country] = data.filter((item) => item.name === name);

  return <BigCountryItem country={country} />;
};

export default CountryItemPage;
