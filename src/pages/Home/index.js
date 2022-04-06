import Slideshow from "../../components/Slideshow";
import News from "../News";
import "./styles.scss";

export default function Home() {
  return (
    <div className="main-container">
      <Slideshow />
      <News />
    </div>
  );
}
