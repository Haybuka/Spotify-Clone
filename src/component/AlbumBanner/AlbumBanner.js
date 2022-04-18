import React from "react";
import Album_banner from "../../Assets/Images/Album-banner.jfif";
import BannerDetails from "./BannerDetails";
import Tab from "./Tab";
import "./Styles/index.css";
const AlbumBanner = () => {
  return (
<<<<<<< HEAD
    <main className="banner relative h-[350px] flex flex-col  ">
=======
    <header className="banner relative flex-1 h-[350px] flex flex-col">
>>>>>>> 9cd5bb8e6b221d8562c688cd90ea8b25642b8654
      <div className="h-full w-full absolute left-0 top-0 ">
        <img
          src={Album_banner}
          alt="bannner"
          className="banner__image w-full h-full object-cover"
        />
      </div>

      {/* data */}

      <BannerDetails />
      <Tab />
    </main>
  );
};

export default AlbumBanner;
