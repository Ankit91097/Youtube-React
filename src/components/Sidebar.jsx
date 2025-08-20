import React from "react";
import { Home, PlaySquare, History, Download, Clock, ThumbsUp } from "lucide-react";

const menu = [
  { icon: <Home />, label: "Home" },
  { icon: <PlaySquare />, label: "Subscriptions" },
  { icon: <History />, label: "History" },
  { icon: <Clock />, label: "Watch Later" },
  { icon: <ThumbsUp />, label: "Liked videos" },
  { icon: <Download />, label: "Downloads" },
];

const Sidebar = () => {
  return (
    <div className="w-56 bg-[#0f0f0f] text-gray-200 h-screen overflow-y-auto hidden md:block">
      <div className="flex flex-col mt-4 space-y-2 px-2">
        {menu.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
