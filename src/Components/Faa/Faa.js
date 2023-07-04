import React, { useState } from "react";
import faa from "../../Assets/faa.mp3";

const Faa = () => {
  const [audio] = useState(new Audio(faa));

  const faaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={faaHandler}>ف</button>
    </div>
  );
};

export default Faa;
