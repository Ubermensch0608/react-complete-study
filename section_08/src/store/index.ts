import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: "test",
  reducers: {
    test: () => {},
  },
});

export const testActions = testSlice.actions;

export default testSlice;
