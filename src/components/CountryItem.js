import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./CountryItem.module.css";
const CountryItem = ({ country }) => {
  const themeState = useSelector((state) => state.theme.colors);

  const numberHelper = country.population.toLocaleString();
  const countryNameHelper = country.name;
  return (
    <motion.li
      className={styles.countryItem}
      variants={{
        initial: {
          opacity: 0,
          scale: 0.5,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      style={{
        backgroundColor: `${themeState.headerBackground}`,
        color: `${themeState.headerFont}`,
      }}
    >
      <Link
        to={countryNameHelper}
        style={{
          backgroundColor: `${themeState.headerBackground}`,
          color: `${themeState.headerFont}`,
        }}
      >
        <div className={styles.imgContainer}>
          <img src={country.flag} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2>{country.name}</h2>
          <div className={styles.description}>
            <p>
              Population: <span>{numberHelper}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default CountryItem;
