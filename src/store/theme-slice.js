import { createSlice } from "@reduxjs/toolkit";

const lightState = {
  headerBackground: "white",
  headerFont: "#111517",
  bodyBackground: "#f2f2f2",
};

const darkState = {
  headerBackground: "#2B3844",
  headerFont: "white",
  bodyBackground: "#202C36",
};

const initialState = {
  themeState: true, //true === lightState
  colors: lightState,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.themeState = !state.themeState;
      state.colors = state.themeState ? lightState : darkState;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
