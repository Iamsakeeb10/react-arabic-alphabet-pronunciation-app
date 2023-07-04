import React, { useState } from "react";
import shin from "../../Assets/shin.mp3";

const Shin = () => {
  const [audio] = useState(new Audio(shin));

  const shinHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={shinHandler}>ش</button>
    </div>
  );
};

export default Shin;
