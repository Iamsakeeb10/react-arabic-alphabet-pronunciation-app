import React, { useState } from "react";
import jhaa from "../../Assets/jhaa.mp3";

const Jhaa = () => {
  const [audio] = useState(new Audio(jhaa));

  const jhaaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={jhaaHandler}>ز</button>
    </div>
  );
};

export default Jhaa;
