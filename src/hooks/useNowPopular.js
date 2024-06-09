import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPopular = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default useNowPopular;
