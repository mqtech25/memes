import React, { useState, useEffect } from "react";

export default function Ajx() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server says bad response");
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {data &&
        data.map((memes) => {
          return <div>{memes.url}</div>;
        })}
    </div>
  );
}
