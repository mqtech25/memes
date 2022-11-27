import { useState } from "react";

export default function StateHook() {
    const [item,setItem]=useState(["Item 1","Item 2"])
    function addItem() {
        const value =prompt('Enter value')
        setItem([...item,value])
    }
    const itemElm= item.map(itemEl=>(
        <p>{itemEl}</p>
    ))
    return(
        <div>
        <button onClick={addItem} className="btn">Add Item</button>
                <p>{itemElm}</p>
        </div>
    );
}