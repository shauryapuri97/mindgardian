import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {
    config: configReducer,
  },
  devTools: composeWithDevTools,
});
