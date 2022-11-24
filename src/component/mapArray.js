import { useState } from "react";

export default function MapData() {
  const [thingArray, setItem] = useState(["item1", "item2"]);
  const addItem = () => {
    const newItem = prompt("Enter Item value");
    // thingArray.push(newItem);
    // console.log(thingArray);
    setItem([...thingArray, newItem]);
    // setItem(newItem);
  };

  return (
    <div className="container">
      <button className="btn" onClick={addItem}>
        Add Item
      </button>
      {thingArray.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
