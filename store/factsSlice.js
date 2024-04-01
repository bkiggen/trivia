import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  facts: [],
  loading: false,
  error: null,
};

const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    setFacts: (state, action) => {
      state.facts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const triviaEndpoints = (builder) => {
  return {
    getTriviaQuestions: builder.query({
      query: () => ({
        url: "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple",
        method: "GET",
      }),
    }),
  };
};

export const selectFacts = (state) => {
  console.log(state);
  return state.facts.facts;
};
export const selectFactsLoading = (state) => state.facts.loading;
export const selectFactsError = (state) => state.facts.error;

export const { setFacts, setLoading, setError } = factsSlice.actions;

export default factsSlice.reducer;
