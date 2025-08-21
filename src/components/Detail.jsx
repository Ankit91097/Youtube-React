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
        <h1 className="text-lg sm:text-xl font-bold mt-4">{video.title}</h1>

        {/* Channel Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
          {/* Channel */}
          <div className="flex items-center gap-3 flex-wrap">
            <img
              src={video.channelImg}
              alt="channel"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-sm sm:text-base">
                Sheryians Coding School
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">
                565K subscribers
              </p>
            </div>
            <button className="ml-0 sm:ml-4 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm">
              Subscribe
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button className="flex items-center gap-2 bg-[#464543] px-3 sm:px-4 py-2 rounded-full hover:bg-gray-700 transition whitespace-nowrap">
              <AiOutlineLike size={20} />
              <span className="text-sm sm:text-base">13K</span>
            </button>

            <button className="flex items-center gap-2 bg-[#464543] px-3 sm:px-4 py-2 rounded-full hover:bg-gray-700 transition whitespace-nowrap">
              <AiOutlineDislike size={20} />
            </button>

            <button className="flex items-center gap-2 bg-[#464543] px-3 sm:px-4 py-2 rounded-full hover:bg-gray-700 transition whitespace-nowrap">
              <RiShareForwardLine size={20} />
              <span className="text-sm sm:text-base">Share</span>
            </button>

            <button className="flex items-center gap-2 bg-[#464543] px-3 sm:px-4 py-2 rounded-full hover:bg-gray-700 transition whitespace-nowrap">
              <MdDownload size={20} />
              <span className="text-sm sm:text-base">Download</span>
            </button>

            <button className="flex items-center gap-2 bg-[#464543] px-3 sm:px-4 py-2 rounded-full hover:bg-gray-700 transition whitespace-nowrap">
              <BiCut size={20} />
              <span className="text-sm sm:text-base">Clip</span>
            </button>
          </div>
        </div>
        <div className="space-y-6 p-4 bg-black text-white rounded-lg">
          {/* Input Section */}
          <div className="flex items-start space-x-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1594026724063-fcf520d86e23?q=80&w=685&auto=format&fit=crop"
              alt="User"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-400 p-1"
              />
              <div className="flex justify-end mt-2 space-x-2">
                <button className="px-3 py-1 text-sm rounded-full hover:bg-gray-700">
                  Cancel
                </button>
                <button className="px-3 py-1 text-sm rounded-full bg-blue-500 hover:bg-blue-600">
                  Comment
                </button>
              </div>
            </div>
          </div>

          {/* Static Comments */}
          <div className="space-y-5">
            {/* Comment 1 */}
            <div className="flex items-start space-x-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  Rahul Sharma{" "}
                  <span className="text-xs text-gray-400 ml-2">
                    2 hours ago
                  </span>
                </h3>
                <p className="text-sm text-gray-300">
                  Really enjoyed this video, learned a lot! 🔥
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                  <button>👍 15</button>
                  <button>👎</button>
                  <button className="hover:text-blue-400">Reply</button>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex items-start space-x-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  Anjali Verma{" "}
                  <span className="text-xs text-gray-400 ml-2">1 day ago</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Awesome content! Keep it up 👏
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                  <button>👍 32</button>
                  <button>👎</button>
                  <button className="hover:text-blue-400">Reply</button>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="flex items-start space-x-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/68.jpg"
                alt="User"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  Sameer Khan{" "}
                  <span className="text-xs text-gray-400 ml-2">3 days ago</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Background music is too good 🎶🔥
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2">
                  <button>👍 8</button>
                  <button>👎</button>
                  <button className="hover:text-blue-400">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Suggested Videos */}
      <div className="lg:w-96 p-4 space-y-4">
        {videos.map((video, i) => {
          return (
            <div
              key={i}
              className="flex gap-2 cursor-pointer flex-col sm:flex-row"
            >
              <img
                src={video.thumbnail}
                alt="thumbnail"
                className="w-full sm:w-40 h-32 sm:h-24 object-cover rounded-lg"
              />
              <div className="flex flex-col mt-2 sm:mt-0">
                <h3 className="font-semibold text-sm line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-xs">{video.channel}</p>
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
