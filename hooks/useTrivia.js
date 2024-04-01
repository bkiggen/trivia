import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetTriviaQuestionsQuery } from "../store";
import {
  setFacts,
  setLoading,
  setError,
  selectFacts,
} from "../store/factsSlice";
import { useSelector } from "react-redux";

export const useTrivia = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetTriviaQuestionsQuery();
  const facts = useSelector(selectFacts);

  useEffect(() => {
    dispatch(setLoading(isLoading));
    if (data) {
      dispatch(setFacts(data.results || []));
    }
    if (error) {
      dispatch(setError(error));
    }
  }, [data, error, isLoading, dispatch]);

  return { data, error, isLoading, refetch, facts };
};
