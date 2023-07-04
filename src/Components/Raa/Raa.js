import React, { useState } from "react";
import raa from "../../Assets/roo.mp3";

const Raa = () => {
  const [audio] = useState(new Audio(raa));

  const raaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={raaHandler}>ر</button>
    </div>
  );
};

export default Raa;
