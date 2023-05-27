import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    setInputValue(value);
  };

  console.log(inputValue);

  return (
    <Child inputValue={inputValue} handleInputChange={handleInputChange} />
  );
}

export default Parent;
