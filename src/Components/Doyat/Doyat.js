import React, { useState } from "react";
import doyat from "../../Assets/doyat.mp3";

const Doyat = () => {
  const [audio] = useState(new Audio(doyat));

  const doyatHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={doyatHandler}>ض</button>
    </div>
  );
};

export default Doyat;
