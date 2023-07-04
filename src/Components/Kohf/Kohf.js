import React, { useState } from "react";
import kohf from "../../Assets/kohf.mp3";

const Kohf = () => {
  const [audio] = useState(new Audio(kohf));

  const kohfHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={kohfHandler}>ق</button>
    </div>
  );
};

export default Kohf;
