import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./adoptedPetSlice";
import searchParams from "./searchParamsSlice";
import { petApi } from "./petApiService";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer, // add reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware), // add middleware
});

export default store;
