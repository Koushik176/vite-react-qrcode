import qrCodeImg from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <main>
      <div className="main-div">
        <img src={qrCodeImg} alt="QR CODE" />
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level 
        </p>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/Koushik176"
          target="_blank"
        >
          Koushik
        </a>
        .
      </div>
    </main>
  );
}

export default App;
