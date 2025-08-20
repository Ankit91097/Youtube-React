import React from "react";
import { useParams } from "react-router";
import videos from "../data/videos";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
import { BiCut } from "react-icons/bi";

const Detail = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);
  return (
    <div className="bg-black min-h-screen text-white flex flex-col lg:flex-row">
      {/* Left Side - Video Section */}
      <div className="flex-1 p-4">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <h1 className="text-xl font-bold mt-4">{video.title}</h1>

        {/* Channel Info */}
        <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <img
              src={video.channelImg}
              alt="channel"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold">Sheryians Coding School</h2>
              <p className="text-gray-400 text-sm">565K subscribers</p>
            </div>
            <button className="ml-4 bg-white text-black px-4 py-2 rounded-full font-semibold">
              Subscribe
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Like Button */}
            <button className="flex items-center gap-2 bg-[#464543] px-4 py-2 rounded-full hover:bg-gray-700 transition">
              <AiOutlineLike size={20} />
              <span>13K</span>
            </button>

            {/* Dislike Button */}
            <button className="flex items-center gap-2 bg-[#464543] px-4 py-2 rounded-full hover:bg-gray-700 transition">
              <AiOutlineDislike size={20} />
            </button>

            {/* Share Button */}
            <button className="flex items-center gap-2 bg-[#464543] px-4 py-2 rounded-full hover:bg-gray-700 transition">
              <RiShareForwardLine size={20} />
              <span>Share</span>
            </button>

            {/* Download Button */}
            <button className="flex items-center gap-2 bg-[#464543] px-4 py-2 rounded-full hover:bg-gray-700 transition">
              <MdDownload size={20} />
              <span>Download</span>
            </button>

            {/* Clip Button */}
            <button className="flex items-center gap-2 bg-[#464543] px-4 py-2 rounded-full hover:bg-gray-700 transition">
              <BiCut size={20} />
              <span>Clip</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Suggested Videos */}
      <div className="lg:w-96 p-4 space-y-4">
        {videos.map((video, i) => {
          return (
            <div key={i} className="flex gap-2 cursor-pointer">
              <img
                src={video.thumbnail}
                alt="thumbnail"
                className="w-40 h-24 rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">{video.title}</h3>
                <p className="text-gray-400 text-xs"> {video.channel}</p>
                <p className="text-gray-400 text-xs">
                  {video.views} • {video.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
