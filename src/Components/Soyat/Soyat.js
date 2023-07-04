import React, { useState } from "react";
import soyat from "../../Assets/chowat.mp3";

const Soyat = () => {
  const [audio] = useState(new Audio(soyat));

  const soyatHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={soyatHandler}>ص</button>
    </div>
  );
};

export default Soyat;
