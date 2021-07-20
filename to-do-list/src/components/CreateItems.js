import React from "react";
import { useState } from "react";

const CreateItems = ({ inputText, items, setInputText, setItems }) => {
  //Handlers

  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const itemsHandler = (e) => {
    e.preventDefault();
    setItems([...items, inputText]);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={itemsHandler}>
        <input
          value={inputText}
          onChange={inputHandler}
          type="text"
          placeholder="ENTER LIST ITEM"
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default CreateItems;
