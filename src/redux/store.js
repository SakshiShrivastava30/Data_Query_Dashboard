import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./querySlice";  // Ensure this file exists

const store = configureStore({
  reducer: {
    query: queryReducer, // Reducer correctly mapped
  },
});

export default store;
