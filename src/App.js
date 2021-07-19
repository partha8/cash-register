import React from "react";
import Billamount from "./components/Billamount";
import Cashgiven from "./components/Cashgiven";
import ReturnChange from "./components/ReturnChange";
import heroImage from "./image/heroImage.png";

function App() {
  return (
    <main>
      <header className="imgContainer">
        <img className="heroImg" src={heroImage} alt="heroImage" />
      </header>
      <section className="interaction-area">
        <h1>Cash register manager</h1>
        <p>
          Enter the bill amount and cash given by the customer and know minimum
          number of notes to return.
        </p>
        <Billamount />
        <Cashgiven />
        <ReturnChange />
      </section>
    </main>
  );
}

export default App;
