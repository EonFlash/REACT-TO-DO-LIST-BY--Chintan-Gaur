import React from "react";

import Item from "./Item";

const ItemList = ({ inputText }) => {
  return (
    <div>
      <Item inputText={inputText} />
    </div>
  );
};

export default ItemList;
