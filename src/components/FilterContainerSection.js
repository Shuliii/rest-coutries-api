import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import { filterActions } from "../store/filter-slice";

import styles from "./FilterContainerSection.module.css";

const filterOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const FilterContainerSection = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.colors);
  const filterState = useSelector((state) => state.filter.filter);
  const searchState = useSelector((state) => state.filter.search);
  const [isExpand, setIsExpand] = useState(false);

  const expandClickHandler = () => {
    setIsExpand(!isExpand);
  };

  const filterClickHandler = (e) => {
    console.log(e.target.innerHTML);
    dispatch(filterActions.change({ name: e.target.innerHTML }));
    setIsExpand(false);
  };

  const changeHandler = (e) => {
    setIsExpand(false);
    dispatch(filterActions.search({ name: e.target.value }));
  };

  //Animate UL and LI
  const parentVar = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        type: "spring",
        bounce: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  //LI Helper
  const liHelper = filterOptions.map((item) => {
    return (
      <motion.li
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opcity: 0, y: -10 },
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        key={Math.random()}
        onClick={filterClickHandler}
      >
        {item}
      </motion.li>
    );
  });

  return (
    <section className={styles.filtercontainersection}>
      <div className={styles.container}>
        <form>
          <div className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={changeHandler}
              style={{
                backgroundColor: `${themeState.headerBackground}`,
                color: `${themeState.headerFont}`,
              }}
              value={searchState}
            />
          </div>
        </form>
        <div
          onClick={expandClickHandler}
          className={styles.filterContainer}
          style={{
            backgroundColor: `${themeState.headerBackground}`,
            color: `${themeState.headerFont}`,
          }}
        >
          <p>{filterState}</p>
          <AnimatePresence>
            {isExpand && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                // initial={{ opacity: 0, y: -20 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                variants={parentVar}
                style={{
                  backgroundColor: `${themeState.headerBackground}`,
                }}
              >
                <AnimatePresence>{liHelper}</AnimatePresence>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FilterContainerSection;
