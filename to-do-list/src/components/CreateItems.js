import React from "react";
import { useState } from "react";

const CreateItems = ({ setInputText }) => {
  //Handlers
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        onChange={inputHandler}
        type="text"
        placeholder="ENTER LIST ITEM"
      />
      <button>Add Item</button>
    </div>
  );
};

export default CreateItems;
