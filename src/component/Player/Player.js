import React from "react";
import PlayerControl from "./PlayerControler";
import PlayerAvatar from "./PlayerAvatar";
import PlayerMusicProgress from "./PlayerProgress";
const Player = () => {
  return (
    <section className="p-6  bg-spotify-400  text-white flex gap-10 ">
      {/* avatar */}
      <PlayerAvatar />
      {/* control */}
      <div className="flex-1 flex flex-col justify-between h-28">
        <PlayerControl />
        <PlayerMusicProgress />
      </div>
      {/* progress */}
    </section>
  );
};

export default Player;
