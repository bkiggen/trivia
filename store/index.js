import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";
import factsReducer, { triviaEndpoints } from "./factsSlice";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple",
  }),
  endpoints: (builder) => ({
    ...triviaEndpoints(builder),
  }),
});

export const { useGetTriviaQuestionsQuery } = api;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    facts: factsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
