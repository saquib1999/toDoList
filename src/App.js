import React, { useState } from "react";
import "./App.css";

const App = () => {
  const addItem = () => {
    setInputList([...inputList, currInput]);
    setCurrInput("");
  };

  const itemEvent = (event) => {
    setCurrInput(event.target.value);
  };
  const [inputList, setInputList] = useState([]);
  const [currInput, setCurrInput] = useState("");

  const deleteItem = (deleteItemIndex) => {
    console.log("deleted", deleteItemIndex);
    setInputList([
      ...inputList.filter((item, index) => index !== deleteItemIndex),
    ]);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={currInput}
            onChange={itemEvent}
          />
          <button disabled={currInput.length === 0} onClick={addItem}>
            +
          </button>
          <ol>
            {inputList.map((item, index) => {
              console.log(index);
              return (
                <li key={index}>
                  {item}
                  <button id={index} onClick={deleteItem.bind(this, index)}>
                    X
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
