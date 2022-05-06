import React from "react";
import Search from "./Search";

function Header({ onSearchHandle }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={onSearchHandle}/>
    </header>
  );
}

export default Header;
