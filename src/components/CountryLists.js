import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import CountryItem from "../components/CountryItem";

import styles from "./CountryLists.module.css";

const CountryLists = () => {
  const countries = useSelector((state) => state.filter.countries);

  // const eightCountries = countries.map((item, i) => {
  //   if (i < 10) {
  //     return item;
  //   }
  // });

  // console.log(eightCountries);

  const liHelper = countries.map((country) => (
    <CountryItem key={Math.random()} country={country} />
  ));

  //ANIMATION
  const parentVar = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section className={styles.countrySection}>
      <div className={styles.container}>
        <motion.ul
          key={countries}
          initial="initial"
          animate="visible"
          variants={parentVar}
        >
          {liHelper}
        </motion.ul>
      </div>
    </section>
  );
};

export default CountryLists;
