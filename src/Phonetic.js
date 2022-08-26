import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay={false}
          controls={true}
        />
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
