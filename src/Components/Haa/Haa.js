import React, { useState } from "react";
import haa from "../../Assets/haa.mp3";

const Haa = () => {
  const [audio] = useState(new Audio(haa));

  const haaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={haaHandler}>ح</button>
    </div>
  );
};

export default Haa;
