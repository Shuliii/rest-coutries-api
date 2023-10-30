import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: "Filter by Region", countries: data, search: "" },
  reducers: {
    change(state, action) {
      state.filter = action.payload.name;

      switch (state.filter) {
        case "America":
          state.countries = data.filter((item) => item.region === "Americas");
          break;

        case "Asia":
          state.countries = data.filter((item) => item.region === "Asia");
          break;

        case "Africa":
          state.countries = data.filter((item) => item.region === "Africa");
          break;

        case "Oceania":
          state.countries = data.filter((item) => item.region === "Oceania");
          break;

        case "Europe":
          state.countries = data.filter((item) => item.region === "Europe");
          break;
        default:
          state.countries = data;
      }
    },
    search(state, action) {
      console.log(action.payload.name);
      state.filter = "Filter by Region";
      state.search = action.payload.name;
      state.countries = data.filter((item) =>
        item.name.toLowerCase().includes(state.search)
      );
      console.log(state.countries);
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
