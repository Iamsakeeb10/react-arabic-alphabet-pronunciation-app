import React, { useState } from "react";
import cha from "../../Assets/cha.mp3";

const Cha = () => {
  const [audio] = useState(new Audio(cha));

  const chaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={chaHandler}>ث</button>
    </div>
  );
};

export default Cha;
