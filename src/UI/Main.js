import "./Main.css";
import Audio from "../Audio/Audio";

const Main = () => {
  const audioPlay = (id) => {
    const audio = document.getElementById(id);
    audio.play(id);
    audio.currentTime = 0;
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="wrapper">
          <button onClick={() => audioPlay("audio-yaa")}>ي</button>
          <button onClick={() => audioPlay("audio-hamza")}>ء</button>
          <button onClick={() => audioPlay("audio-last-haa")}>ه</button>
          <button onClick={() => audioPlay("audio-wow")}>و</button>
          <button onClick={() => audioPlay("audio-nun")}>ن</button>
          <button onClick={() => audioPlay("audio-mim")}>م</button>
          <button onClick={() => audioPlay("audio-lam")}>ل</button>
          <button onClick={() => audioPlay("audio-kahf")}>ك</button>
          <button onClick={() => audioPlay("audio-kohf")}>ق</button>
          <button onClick={() => audioPlay("audio-faa")}>ف</button>
          <button onClick={() => audioPlay("audio-goyin")}>غ</button>
          <button onClick={() => audioPlay("audio-ayin")}>ع</button>
          <button onClick={() => audioPlay("audio-joh")}>ظ</button>
          <button onClick={() => audioPlay("audio-toh")}>ط</button>
          <button onClick={() => audioPlay("audio-dowat")}>ض</button>
          <button onClick={() => audioPlay("audio-sowat")}>ص</button>
          <button onClick={() => audioPlay("audio-shin")}>ش</button>
          <button onClick={() => audioPlay("audio-sin")}>س</button>
          <button onClick={() => audioPlay("audio-jha")}>ز</button>
          <button onClick={() => audioPlay("audio-raa")}>ر</button>
          <button onClick={() => audioPlay("audio-jal")}>ذ</button>
          <button onClick={() => audioPlay("audio-dal")}>د</button>
          <button onClick={() => audioPlay("audio-khoo")}>خ</button>
          <button onClick={() => audioPlay("audio-haa")}>ح</button>
          <button onClick={() => audioPlay("audio-jeem")}>ج</button>
          <button onClick={() => audioPlay("audio-cha")}>ث</button>
          <button onClick={() => audioPlay("audio-taa")}>ت</button>
          <button onClick={() => audioPlay("audio-baa")}>ب</button>
          <button onClick={() => audioPlay("audio-aleef")}>ا</button>
        </div>
      </div>
      <div>
        <Audio />
      </div>
    </div>
  );
};

export default Main;
