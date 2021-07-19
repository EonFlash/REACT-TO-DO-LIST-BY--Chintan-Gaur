import React from "react";

import Item from "./Item";

const ItemList = ({ inputText, items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item inputText={inputText} />
      ))}
    </div>
  );
};

export default ItemList;
