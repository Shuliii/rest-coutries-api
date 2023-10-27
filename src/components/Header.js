import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { themeActions } from "../store/theme-slice";
import { filterActions } from "../store/filter-slice";

import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.themeState);
  const themeState = useSelector((state) => state.theme.colors);

  const clickHandler = () => {
    dispatch(themeActions.toggle());
  };

  const homeClickHandler = () => {
    dispatch(filterActions.search({ name: "" }));
  };

  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: `${themeState.headerBackground}`,
        color: `${themeState.headerFont}`,
      }}
    >
      <div className={styles.container}>
        <div>
          <Link
            to="/"
            style={{
              backgroundColor: `${themeState.headerBackground}`,
              color: `${themeState.headerFont}`,
            }}
            onClick={homeClickHandler}
          >
            Where in the world?
          </Link>
        </div>
        <div>
          {theme && <p onClick={clickHandler}>Dark Mode</p>}
          {!theme && <p onClick={clickHandler}>Light Mode</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
