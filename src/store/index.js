import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./theme-slice";
import filterSlice from "./filter-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
