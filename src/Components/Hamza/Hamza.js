import React, { useState } from "react";
import hamza from "../../Assets/hamza.mp3";

const Hamza = () => {
  const [audio] = useState(new Audio(hamza));

  const hamzaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={hamzaHandler}>ء</button>
    </div>
  );
};

export default Hamza;
