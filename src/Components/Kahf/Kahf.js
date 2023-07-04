import React, { useState } from "react";
import kahf from "../../Assets/kahf.mp3";

const Kahf = () => {
  const [audio] = useState(new Audio(kahf));

  const kahfHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={kahfHandler}>ك</button>
    </div>
  );
};

export default Kahf;
