import React from "react";
import { NavLink } from "react-router";

const VideoCard = ({ id, thumbnail, title, channel, views, time, channelImg, duration }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <div className="w-full max-w-sm sm:max-w-[380px] cursor-pointer">
        {/* Thumbnail with duration */}
        <div className="relative">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="rounded-xl w-full h-44 sm:h-56 object-cover hover:scale-[1.02] transition-transform duration-200"
          />
          {/* Duration chip */}
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-90 text-white text-[10px] sm:text-[12px] px-1.5 py-0.5 rounded">
            {duration}
          </span>
        </div>

        {/* Video Info */}
        <div className="mt-2 sm:mt-3 flex items-start">
          {/* Channel Avatar */}
          <img
            src={channelImg}
            alt={channel}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3"
          />

          {/* Title + Channel Info */}
          <div className="flex flex-col leading-snug">
            <h3 className="font-medium text-[14px] sm:text-[15px] text-white line-clamp-2 hover:text-gray-200">
              {title}
            </h3>
            <p className="text-[12px] sm:text-[13px] text-gray-400 hover:text-gray-300">
              {channel}
            </p>
            <p className="text-[12px] sm:text-[13px] text-gray-400">
              {views} • {time}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default VideoCard;
