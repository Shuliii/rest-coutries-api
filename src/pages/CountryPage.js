import { Outlet } from "react-router-dom";

import FilterContainerSection from "../components/FilterContainerSection";

const CountryPage = () => {
  return (
    <>
      <FilterContainerSection />
      <Outlet />
    </>
  );
};

export default CountryPage;
