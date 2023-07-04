import React, { useState } from "react";
import lastHaa from "../../Assets/haalast.mp3";

const LastHaa = () => {
  const [audio] = useState(new Audio(lastHaa));

  const lastHaaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={lastHaaHandler}>ه</button>
    </div>
  );
};

export default LastHaa;
