import React from "react";

import Item from "./Item";

const ItemList = ({ inputText, items, setItems }) => {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} items={items} setItems={setItems} />
      ))}
    </div>
  );
};

export default ItemList;
