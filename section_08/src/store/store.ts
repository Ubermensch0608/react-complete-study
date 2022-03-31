import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSlice from "store";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
