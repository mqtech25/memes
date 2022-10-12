import React, { useState, useEffect }  from "react";

const UseRef = () => {
  const [memes, setMemes] = useState([]);

  useEffect(
    ()=>{
        const loadData =async () => {
            const result = await fetch('https://api.imgflip.com/get_memes')
              .then((res) => res.json())
              .then((res) => res.data)
              .catch((err) => console.error(err));
        
            setMemes(result.memes);
          };
          loadData();
    },[]);

  return (
    <div>
      {memes.map((meme) => (
        <div key={meme.id}>{meme.url}</div>
      ))}
    </div>
  );
}

export default UseRef;
