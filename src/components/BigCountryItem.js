import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../data.json";
import styles from "./BigCountryItem.module.css";

const BigCountryItem = ({ country }) => {
  const navigate = useNavigate();
  const themeState = useSelector((state) => state.theme.colors);

  const clickHandler = (e) => {
    console.log(e.target.textContent);
    navigate(`/${e.target.textContent}`);
  };

  const populationHelper = country.population.toLocaleString();
  const [topLevelDomainHelper] = country.topLevelDomain;
  const countryLanguageHelper = country.languages
    .map((item) => item.name)
    .join(", ");
  const [currenciesHelper] = country.currencies;

  const borders = country.borders;
  const bordersHelper =
    borders &&
    country.borders.map((item) => {
      const [countryName] = data.filter(
        (element) => element.alpha3Code === item
      );
      return (
        <motion.li
          variants={{
            hidden: { scale: 0.7, opacity: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          style={{
            backgroundColor: `${themeState.headerBackground}`,
            color: `${themeState.headerFont}`,
          }}
          onClick={clickHandler}
        >
          <Link
            to={"/" + countryName.name}
            style={{
              color: `${themeState.headerFont}`,
            }}
          >
            {countryName.name}
          </Link>
        </motion.li>
      );
    });
  return (
    <>
      <section className={styles.sectionBack}>
        <div className={styles.container}>
          <Link
            style={{
              color: `${themeState.headerFont}`,
            }}
            to="../"
          >
            Back
          </Link>
        </div>
      </section>
      <motion.section
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className={styles.countriesDescription}
      >
        <div className={styles.container}>
          <motion.div
            key={country}
            className={styles.countryFlag}
            // variants={{
            //   hidden: { rotateY: 720, rotateX: 720, opacity: 0 },
            //   visible: {
            //     opacity: 1,
            //     rotateY: 0,
            //     rotateX: 0,
            //     transition: {
            //       duration: 1,
            //       type: "spring",
            //     },
            //   },
            // }}
            animate={{ scale: [0.9, 1.2, 1] }}
          >
            <img src={country.flag} alt={country.name} />
          </motion.div>
          <div
            className={styles.descriptionContainer}
            style={{
              color: `${themeState.headerFont}`,
            }}
          >
            <div className={styles.countryName}>
              <h2>{country.name}</h2>
            </div>
            <div className={styles.mainDescriptionContainer}>
              <div className={styles.mainDescriptionLeft}>
                <p>
                  Native Name: <span>{country.nativeName}</span>
                </p>
                <p>
                  Population: <span>{populationHelper}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              <div className={styles.mainDescriptionRight}>
                <p>
                  Top Level Domain: <span>{topLevelDomainHelper}</span>
                </p>
                <p>
                  Currencies: <span>{currenciesHelper.name}</span>
                </p>
                <p>
                  Languages: <span>{countryLanguageHelper}</span>
                </p>
              </div>
            </div>
            {borders && (
              <div className={styles.footerDescription}>
                <p>Border Countries:</p>
                <motion.ul
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {bordersHelper}
                </motion.ul>
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default BigCountryItem;
