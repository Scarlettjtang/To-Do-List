import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => [...prevItems, inputText]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Plan of the day</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              key={index}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
