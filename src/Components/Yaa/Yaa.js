import React, { useState } from "react";
import yaa from "../../Assets/yaa.mp3";

const Yaa = () => {
  const [audio] = useState(new Audio(yaa));

  const yaaHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={yaaHandler}>ي</button>
    </div>
  );
};

export default Yaa;
