import React, { useState } from "react";
import wow from "../../Assets/wow.mp3";

const Wow = () => {
  const [audio] = useState(new Audio(wow));

  const wowHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={wowHandler}>و</button>
    </div>
  );
};

export default Wow;
