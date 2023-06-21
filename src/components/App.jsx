import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // it has to be empty
  // crate a new array that can hold items . it has to be empty array.
  const [items, setItems] = useState([]);

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}

export default App;
