import { BsThreeDots } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import verifiedIcon from "../../Assets/Images/verified-badge.png";
const BannerDetails = () => {
  return (
    <div className="banner__details">
      {/* nav */}
      <DetailsNav />

      {/* details with button */}
      <section className="flex items-end justify-between">
        <div>
          <h6 className="uppercase light-text mb-1">Artist</h6>
          <h1 className="flex gap-2 items-center mb-3">
            <span className="text-4xl font-semibold">Ariana Grande</span>
            <img
              src={verifiedIcon}
              alt="correct icons"
              className="w-6 h-6 mt-3"
            />
          </h1>
          <p className="light-text flex items-center gap-2">
            <FaHeadphonesAlt /> 64,427,424{" "}
            <span className="">Monthly Listeners</span>
          </p>
        </div>
        {/* buttons */}
        <DetailsBtn />
      </section>
    </div>
  );
};

export default BannerDetails;

const DetailsBtn = () => (
  <div className="flex  gap-3">
    <button className="btn px-6 uppercase bg-orange-400/80 font-medium">
      play
    </button>
    <button className="btn px-4 text-sm bg-gray-700/80 flex items-center gap-2 capitalize">
      <MdDone />
      <span>following</span>
    </button>
  </div>
);

const DetailsNav = () => (
  <section className="flex items-center justify-between ">
    <p className=" light-text">
      Home / <span className="">Popular artists</span>
    </p>

    <BsThreeDots className=" text-xl" />
  </section>
);
