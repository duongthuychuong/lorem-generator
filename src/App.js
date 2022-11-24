import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let test = [];
    for (let index = 0; index < count; index++) {
      let paragraph = data[Math.floor(Math.random() * data.length)];
      test = [...test, paragraph];
      console.log("paragraph", paragraph);
    }
    setText(test);
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
          onChange={(e) => {
            let input = e.target.value;
            if (input <= 0) {
              input = 1;
            }
            if (input > 50) {
              input = 50;
            }
            setCount(input);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
