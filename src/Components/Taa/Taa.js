import React, { useState } from "react";
import taa from "../../Assets/taa.mp3";

const Aleef = () => {
  const [audio] = useState(new Audio(taa));

  const taaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={taaHandler}>ت</button>
    </div>
  );
};

export default Aleef;
