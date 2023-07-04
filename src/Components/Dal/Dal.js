import React, { useState } from "react";
import dal from "../../Assets/daal.mp3";

const Dal = () => {
  const [audio] = useState(new Audio(dal));

  const dalHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={dalHandler}>د</button>
    </div>
  );
};

export default Dal;
