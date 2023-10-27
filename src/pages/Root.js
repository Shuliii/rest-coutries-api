import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";

const Root = () => {
  const themeState = useSelector((state) => state.theme.colors);
  return (
    <div
      style={{
        backgroundColor: `${themeState.bodyBackground}`,
        minHeight: "100vh",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
