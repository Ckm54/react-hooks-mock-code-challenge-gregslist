import React, { useState } from "react";

function Search({ handleSearch }) {
  const [input, setInput] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(input);
    setInput("")
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
