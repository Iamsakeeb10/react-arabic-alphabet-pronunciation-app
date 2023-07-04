import React, { useState } from "react";
import ayin from "../../Assets/ayeen.mp3";

const Ayin = () => {
  const [audio] = useState(new Audio(ayin));

  const ayinHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={ayinHandler}>ع</button>
    </div>
  );
};

export default Ayin;
