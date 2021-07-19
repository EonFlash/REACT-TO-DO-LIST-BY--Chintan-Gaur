import React from "react";

const Item = ({ inputText }) => {
  return (
    <div>
      <ul>
        <li>
          <h1>{inputText}</h1>
        </li>
      </ul>
    </div>
  );
};

export default Item;
