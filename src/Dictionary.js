import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <h2>What word do you want to look up?</h2>
      <form>
        <input type="search" placeholder="Search for a word..." />
        <input type="submit" value="Search" />
      </form>
      <h4>Get definitions, synonyms, translations and more</h4>
    </div>
  );
}
