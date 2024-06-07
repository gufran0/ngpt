import React from "react";
import { useSelector } from "react-redux";
import VideoTItle from "./VideoTItle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);

  if (!movies) {
    return;
  }

  const mainMovie = movies?.[0];
  console.log("movies", mainMovie);

  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTItle title={original_title} overview={overview} />
      <VideoBackGround />
    </div>
  );
};

export default MainContainer;
