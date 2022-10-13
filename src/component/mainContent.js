import { render } from "@testing-library/react";
import React from "react";
export default function MainContent() {
  function ajx() {
    fetch("https://api.imgflip.com/get_memes").then(({ results }) =>
      this.setState({ images: results })
    );
  }
  return (
    <div className="container">
      <form className="meme_form">
        <input type="text" placeholder="Enter First Line"></input>
        <input type="text" placeholder="Enter Second Line"></input>
        <button type="submit" onClick={ajx} className="btn">
          Get a new image
        </button>
      </form>
    </div>
  );
}
