import React, { useState } from "react";
import mim from "../../Assets/meem.mp3";

const Mim = () => {
  const [audio] = useState(new Audio(mim));

  const mimHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={mimHandler}>م</button>
    </div>
  );
};

export default Mim;
