import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});


export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      user: userSlice,
    },
    preloadedState,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>