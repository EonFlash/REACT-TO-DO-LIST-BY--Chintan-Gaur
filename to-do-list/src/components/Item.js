import React from "react";

const Item = ({ inputText, item }) => {
  return (
    <div>
      <ul>
        <li>
          <h1>{item}</h1>
          <button>Delete</button>
          <button>Done</button>
        </li>
      </ul>
    </div>
  );
};

export default Item;
