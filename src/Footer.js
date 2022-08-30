import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span className="text">
        This project was coded by Tetiana Bedina{" "}
        <a href="mailto:tibedina@gmail.com" title="my email">
          tibedina@gmail.com
        </a>{" "}
        and it is{" "}
        <a
          href="https://github.com/BeTetiana/react-dictionary-project"
          title="my open-source code"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://cheerful-brioche-37bce7.netlify.app/"
          title="my project"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </span>
    </div>
  );
}
