import React from "react";
import styled from "styled-components";
import { useState } from "react";

//materialui

const CreateItems = ({ inputText, items, setInputText, setItems }) => {
  //Handlers

  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const itemsHandler = (e) => {
    e.preventDefault();
    setItems([...items, inputText]);
    setInputText("");
  };

  return (
    <StlyedCreateItem>
      <h1>
        TO DO <span>LIST</span>{" "}
      </h1>
      <form onSubmit={itemsHandler}>
        <input
          value={inputText}
          onChange={inputHandler}
          type="text"
          placeholder="ENTER LIST ITEM"
        />
        <button>Add Item</button>
      </form>
    </StlyedCreateItem>
  );
};

const StlyedCreateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  input {
    padding: 1rem;
    text-transform: capitalize;
  }

  button {
    margin-top: 2rem;
    transition: all 0.5s ease;

    &:hover {
      background-color: #50cb93;
      color: white;
    }
  }
  h1 {
    font-size: 5rem;
    font-weight: lighter;
  }

  span {
    color: #50cb93;
  }
`;

export default CreateItems;
