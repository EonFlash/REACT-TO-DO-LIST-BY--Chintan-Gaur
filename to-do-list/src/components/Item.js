import React from "react";

const Item = ({ inputText, item, items, setItems }) => {
  const deleteItem = () => {
    setItems(items.filter((i) => i != item));
  };

  return (
    <div>
      <ul>
        <li>
          <h1>{item}</h1>
          <button onClick={deleteItem}>Delete</button>
          <button>Done</button>
        </li>
      </ul>
    </div>
  );
};

export default Item;
