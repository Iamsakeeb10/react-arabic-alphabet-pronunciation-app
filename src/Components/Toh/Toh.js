import React, { useState } from "react";
import toh from "../../Assets/too.mp3";

const Toh = () => {
  const [audio] = useState(new Audio(toh));

  const tohHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={tohHandler}>ط</button>
    </div>
  );
};

export default Toh;
