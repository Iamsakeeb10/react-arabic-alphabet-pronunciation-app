import React, { useState } from "react";
import joh from "../../Assets/joo.mp3";

const Joh = () => {
  const [audio] = useState(new Audio(joh));

  const johHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={johHandler}>ظ</button>
    </div>
  );
};

export default Joh;
