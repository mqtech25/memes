import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => console.error(err));

      setMemes(result.memes);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <form className="meme_form">
        <input type="text" placeholder="Enter First Line"></input>
        <input type="text" placeholder="Enter Second Line"></input>
        <button type="submit" className="btn">
          Get a new image
        </button>
      </form>
      <div>
        {memes.map((meme) => (
          <div key={meme.id}>{meme.url}</div>
        ))}
      </div>
    </div>
  );
}
