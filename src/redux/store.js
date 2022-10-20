import { configureStore } from "@reduxjs/toolkit";
//configureStore() : обертка для createStore() , упрощающая настройку хранилища с настройками по умолчанию.
import generalSlice from "./reducers/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
});
