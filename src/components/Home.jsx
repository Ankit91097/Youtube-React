import React from "react";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import videos from "../data/videos";

const Home = () => {
  return (
    <div className="flex bg-[#0F0F0F] flex-col md:flex-row">
      {/* Sidebar - Mobile me upar, md+ screens me left */}
      <div className="w-full md:w-64">
        <Sidebar />
      </div>

      <div className="flex-1 px-4 sm:px-6 py-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 justify-items-center md:justify-items-start">
          {videos.map((video, i) => (
            <div key={i} className="w-full max-w-[380px]">
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
