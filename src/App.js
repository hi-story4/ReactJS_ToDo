import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => {
      const newArray = [toDo, ...currentArray];
      console.log(newArray);
      return newArray;
    });
    setToDo("");
    console.log(toDos);
  };

  const deleteBtn = (event) => {
    const li = event.target.parentElement;
    li.remove();
  };
  const reset = () => {
    setToDos([]);
  };

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          placeholder="Write your to do..."
          type="text"
        />
        <button>Add to Do </button>
      </form>
      <span style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={reset}>Reset</button>
      </span>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index} style={{ textAlign: "left" }}>
            {item}
            <button onClick={deleteBtn}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
