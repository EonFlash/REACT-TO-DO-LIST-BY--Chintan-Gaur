import React from "react";
import { useState } from "react";

//components
import CreateItems from "./components/CreateItems";
import ItemList from "./components/ItemList";

//GlobalStyles
import GlobalStyle from "./components/GlobalStyles";

function App() {
  //States(Uplifted)
  const [inputText, setInputText] = useState("");

  //States
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <GlobalStyle />

      <CreateItems
        setInputText={setInputText}
        inputText={inputText}
        items={items}
        setItems={setItems}
      />
      <ItemList inputText={inputText} items={items} setItems={setItems} />
      <ItemList inputText={inputText} items={items} setItems={setItems} />
    </div>
  );
}

export default App;
