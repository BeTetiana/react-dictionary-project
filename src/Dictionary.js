import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} definition`);
  }
  function updateKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary shadow">
      <h2>What word do you want to look up?</h2>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          autofocus="true"
          onChange={updateKeyWord}
        />
        <input type="submit" value="Search" />
      </form>
      <h4>Get definitions, synonyms, translations and more</h4>
    </div>
  );
}
