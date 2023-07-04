import React, { useState } from "react";
import kho from "../../Assets/khoo.mp3";

const Kho = () => {
  const [audio] = useState(new Audio(kho));

  const khoHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={khoHandler}>خ</button>
    </div>
  );
};

export default Kho;
