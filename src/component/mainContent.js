import React, { useState, useEffect, useRef } from "react";
import download from "downloadjs";
import html2canvas from "html2canvas";

export default function MainContent() {
  const [memes, setMemes] = useState([]); //useState hook for define variable state
  const imgRef = useRef(null);
  const inputLine1 = useRef(null);
  const inputLine2 = useRef(null);
  const memel1 = useRef(null);
  const memel2 = useRef(null);
  const downloadRef = useRef(null);
  const memeImagDownload = useRef(null);

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
    imgRef.current.src = memes[randomImgNo].url;
    downloadRef.current.style.display = "block";
    if (inputLine1.current?.value) {
      memel1.current.innerText = inputLine1.current.value;
      memel1.current.style.display = "block";
    }
    if (inputLine2.current?.value) {
      memel2.current.innerText = inputLine2.current.value;
      memel2.current.style.display = "block";
    }
  };
  const downloadImg = async () => {
    const canvas = await html2canvas(memeImagDownload.current);
    const dataURL = canvas.toDataURL("image/png");
    download(dataURL, "download.png", "image/png");
  };
  const Inputtext = (e) => {
    if (imgRef.current.src !== "") {
      memel1.current.innerText = inputLine1.current.value;
      memel1.current.style.display = "block";
      if (inputLine1.current.value === "") {
        memel1.current.style.display = "none";
      }
    }
  };
  return (
    <div className="container">
      <form className="meme_form">
        <input
          type="text"
          ref={inputLine1}
          onKeyUp={Inputtext}
          placeholder="Enter First Line"
        ></input>
        <input
          type="text"
          ref={inputLine2}
          placeholder="Enter Second Line"
        ></input>
        <button type="button" className="btn" onClick={getData}>
          Get a new meme
        </button>
      </form>
      <div className="downloadDiv text-center" ref={downloadRef}>
        <button className="btn" onClick={downloadImg}>
          Download Meme
        </button>
      </div>
      <div className="memeDiv" ref={memeImagDownload}>
        <h2 className="memeline1" ref={memel1}>
          xyz
        </h2>
        <img src="" ref={imgRef} id="memeImg" className="meme-img" alt="" />
        <h2 className="memeline2" ref={memel2}>
          xyz
        </h2>
      </div>
      {/* <div>
        {memes.map((meme) => (
          <div key={meme.id}>{meme.url}</div>
        ))}
      </div> */}
    </div>
  );
}
