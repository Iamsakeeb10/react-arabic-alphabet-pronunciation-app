import React, { useState } from "react";
import nun from "../../Assets/noon.mp3";

const Nun = () => {
  const [audio] = useState(new Audio(nun));

  const nunHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={nunHandler}>ن</button>
    </div>
  );
};

export default Nun;
