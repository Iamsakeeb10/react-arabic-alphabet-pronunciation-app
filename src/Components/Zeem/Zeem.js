import React, { useState } from "react";
import zeem from "../../Assets/zeem.mp3";

const Zeem = () => {
  const [audio] = useState(new Audio(zeem));

  const zeemHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={zeemHandler}>ج</button>
    </div>
  );
};

export default Zeem;
