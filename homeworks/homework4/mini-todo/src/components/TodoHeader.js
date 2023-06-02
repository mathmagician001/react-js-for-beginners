function TodoHeader(props) {
  const { handleAddClick, handleInputChange, inputValue } = props;

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
