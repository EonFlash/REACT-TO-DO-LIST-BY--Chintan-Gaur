import React from "react";
import { useState } from "react";

//components
import CreateItems from "./components/CreateItems";
import ItemList from "./components/ItemList";

function App() {
  //States(Uplifted)
  const [inputText, setInputText] = useState("");

  //States
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <CreateItems
        setInputText={setInputText}
        inputText={inputText}
        items={items}
        setItems={setItems}
      />
      <ItemList inputText={inputText} items={items} />
    </div>
  );
}

export default App;
