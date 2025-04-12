import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    queries: [],
    result: null,  // Ensure result exists
  },
  reducers: {
    addQuery: (state, action) => {
      console.log("Adding Query:", action.payload); // Debugging
      state.queries.push(action.payload);
    },
    querySuccess: (state, action) => {
      console.log("Query Success:", action.payload); // Debugging
      state.result = action.payload;
    },
    queryFailure: (state, action) => {
      console.log("Query Failed:", action.payload); // Debugging
      state.result = "Error: " + action.payload;
    },
  },
});

export const { addQuery, querySuccess, queryFailure } = querySlice.actions;
export default querySlice.reducer;
