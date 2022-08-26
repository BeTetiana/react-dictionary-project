import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyWord(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Dictionary-box shadow">
        <h2>What word do you want to look up?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word..."
            autoFocus={true}
            onChange={updateKeyWord}
          />
          <input type="submit" value="Search" />
        </form>
        <h4>Get definitions, synonyms, translations and more</h4>
      </div>
      <div className="results">
        <Results results={results} />
      </div>
    </div>
  );
}
