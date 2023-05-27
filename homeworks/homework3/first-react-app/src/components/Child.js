import React from "react";

function Child(props) {
  const { inputValue, handleInputChange } = props;
  return <input type="text" value={inputValue} onChange={handleInputChange} />;
}

export default Child;
