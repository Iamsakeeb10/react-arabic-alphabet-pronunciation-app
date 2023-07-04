import React, { useState } from "react";
import laam from "../../Assets/laam.mp3";

const Laam = () => {
  const [audio] = useState(new Audio(laam));

  const laamHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={laamHandler}>ل</button>
    </div>
  );
};

export default Laam;
