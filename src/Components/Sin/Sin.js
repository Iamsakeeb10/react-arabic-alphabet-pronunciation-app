import React, { useState } from "react";
import sin from "../../Assets/chin.mp3";

const Sin = () => {
  const [audio] = useState(new Audio(sin));

  const sinHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={sinHandler}>س</button>
    </div>
  );
};

export default Sin;
