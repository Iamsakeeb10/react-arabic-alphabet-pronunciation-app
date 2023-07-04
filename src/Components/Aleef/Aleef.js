import React, { useState } from "react";
import aleef from "../../Assets/aleef.mp3";

const Aleef = () => {
  const [audio] = useState(new Audio(aleef));

  const AleefHandler = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={AleefHandler}>ا</button>
      <audio src={audio.src} />
    </div>
  );
};

export default Aleef;
