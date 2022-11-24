import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={() => {
            setCount(count + 1);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsusdfsd sldfjskdlfjksldjf sdfkjsdflkjsdf mxskdfhdkls
          sdflksdjfksd jf
        </p>
        <p>
          Lorem ipsusdfsd sldfjskdlfjksldjf sdfkjsdflkjsdf mxskdfhdkls
          sdflksdjfksd jf
        </p>
      </article>
    </section>
  );
}

export default App;
