import React from "react";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import videos from "../data/videos";

const Home = () => {
  return (
    <div className="flex bg-[#0F0F0F]">
      <Sidebar />
      <div className="px-6 py-4">
        {/* Category tags */}
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide mb-6">
          {[
            "All",
            "Gaming",
            "Web Development",
            "Esports",
            "Music",
            "News",
            "Trailers",
            "Live",
            "Indian Pop Music",
            "Masala Films",
          ].map((tag, i) => (
            <button
              key={i}
              className="bg-[#272727] px-3 py-1 rounded-full text-sm text-white hover:bg-gray-600 whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Videos Section */}
        <div className="px-6 py-4 grid justify-center sm:justify-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {videos.map((video,i) => (
            <div key={i} className="max-w-[380px]">
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
