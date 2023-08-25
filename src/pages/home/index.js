import mainLogo from "../../assets/BCE_Logo_Colour.jpg";
import "../../App.css";
import "./style.css";

export default function Home() {
  return (
    <div className="card" id="home">
      <div className="image_container">
        <img
          id="home_image"
          src={mainLogo}
          alt="Base Camp Education Logo"
          draggable="false"
        />
      </div>
      <div className="text_container" id="home_text">
        <h1>Welcome to Base Camp Education!</h1>
        <p>
          Base Camps can be found at the bottom of high mountains, so climbers
          can gather their strength before venturing out to conquer the
          surrounding peaks.
        </p>
        <p>
          Base Camp Education provides holistic and nature based educational
          opportunities for young people, where they can gain support whilst
          conquering their own mountains.
        </p>
        <p>
          Ran by Ellie Tristam, a qualified teacher with over 10 years of
          experience, students of Base Camp Education get to share in her
          expertise of mindfulness, personal development and emotional
          wellbeing.
        </p>
      </div>
    </div>
  );
}
