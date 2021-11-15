import "./styles.css";
import IMAGE from "./react.png";
import SVG from "./square.svg";

export const App = () => {
  return (
    <>
      <h1> React Project Setup</h1>;
      <img src={IMAGE} height={300} width={300} />
      <img src={SVG} alt="svg" />
    </>
  );
};
