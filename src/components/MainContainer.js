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

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTItle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
