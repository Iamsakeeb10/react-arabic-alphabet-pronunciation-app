import React, { useState } from "react";
import jaal from "../../Assets/jaal.mp3";

const Jaal = () => {
  const [audio] = useState(new Audio(jaal));

  const jaalHandler = () => {
    audio.play();
  };

  return (
    <div>
      <audio src={audio.src} />
      <button onClick={jaalHandler}>ذ</button>
    </div>
  );
};

export default Jaal;
