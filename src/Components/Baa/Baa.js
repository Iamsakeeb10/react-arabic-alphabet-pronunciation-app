import React, { useState } from "react";
import baa from "../../Assets/baa.mp3";

const Aleef = () => {
  const [audio] = useState(new Audio(baa));

  const baaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={baaHandler}>ب</button>
      <audio src={audio.src} />
    </div>
  );
};

export default Aleef;
