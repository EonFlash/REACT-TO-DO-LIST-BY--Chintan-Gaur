import React from "react";
import styled from "styled-components";

const Item = ({ inputText, item, items, setItems }) => {
  const deleteItem = () => {
    setItems(items.filter((i) => i != item));
  };

  return (
    <StyledItem>
      <div className="container">
        <h2>=> {item}</h2>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  margin-left: 35%;
  margin-top: 1rem;
  h2 {
    color: white;
    font-size: 2rem;
    font-family: "Yomogi", cursive;
    text-transform: capitalize;
  }

  button {
    transition: all 0.5s ease;

    &:hover {
      background-color: #50cb93;
      color: white;
    }
  }
`;

export default Item;
