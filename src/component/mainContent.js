import React, { useState, useEffect } from "react";
// import download from "downloadjs";
// import html2canvas from "html2canvas";

export default function MainContent() {
  const [memes, setMemes] = useState([]); //useState hook for define variable state
  const [memeImg, setImgUrl] = useState("");
  //useEffect hook for change variable state
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
  const getData = () => {
    var randomImgNo = Math.floor(Math.random() * memes.length);
    setImgUrl(memes[randomImgNo].url);
  };
  return (
    <div className="container">
      <form className="meme_form">
        <input type="text" placeholder="Enter First Line"></input>
        <input type="text" placeholder="Enter Second Line"></input>
        <button type="button" className="btn" onClick={getData}>
          Get a new meme
        </button>
      </form>
      <div className="downloadDiv text-center">
        <button className="btn">Download Meme</button>
      </div>
      <div className="memeDiv">
        <h2 className="memeline1">xyz</h2>
        <img src={memeImg} id="memeImg" className="meme-img" alt="" />
        <h2 className="memeline2">xyz</h2>
      </div>
      {/* <div>
        {memes.map((meme) => (
          <div key={meme.id}>{meme.url}</div>
        ))}
      </div> */}
    </div>
  );
}
