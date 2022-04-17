import Avater from "../../Assets/Images/Album-banner.jfif";

const PlayerAvatar = () => {
  return (
    <div className=" h-28 w-28 rounded-md overflow-hidden border border-red-500">
      <img
        src={Avater}
        alt="track cover"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default PlayerAvatar;
