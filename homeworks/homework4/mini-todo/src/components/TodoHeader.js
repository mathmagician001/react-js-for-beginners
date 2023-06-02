import React, { useState } from "react";

function TodoHeader(props) {
  const { handleAddClick } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => setInputValue(value);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(event) => {
          const { target } = event;
          const { value } = target;
          handleInputChange(value);
        }}
      />
      <button
        onClick={() => {
          handleAddClick(inputValue);
        }}
      >
        add
      </button>
    </div>
  );
}

export default TodoHeader;
