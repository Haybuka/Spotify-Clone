import React from "react";
import Avatar from "../../Assets/Images/Album-banner.jfif";

const SidebarAvatar = () => {
  return (
    <a
      href="/"
      className="w-8 h-8 text-xs overflow-hidden rounded-full outline bg-red-400 outline-1 outline-offset-2 outline-white">
      <img
        src={Avatar}
        alt="user avatar"
        className=" object-cover object-center"
      />
    </a>
  );
};

export default SidebarAvatar;
