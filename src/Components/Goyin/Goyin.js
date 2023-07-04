import React, { useState } from "react";
import goyin from "../../Assets/goyeen.mp3";

const Goyin = () => {
  const [audio] = useState(new Audio(goyin));

  const goyinHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={goyinHandler}>غ</button>
    </div>
  );
};

export default Goyin;
