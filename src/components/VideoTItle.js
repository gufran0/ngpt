import React from "react";

const VideoTItle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 px-12 text-white p-4 text-xl bg-opacity-50 rounded-lg ">
          ▶Play
        </button>
        <button className="bg-gray-500 mx-2 px-12 text-white p-4 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTItle;
