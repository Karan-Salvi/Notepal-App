import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import inputStatusSlice from "./inputStatusSlice";

const noteStore = configureStore({
  reducer: {
    notes:noteSlice.reducer,
    inputStatus:inputStatusSlice.reducer,
  },
});

export default noteStore;
