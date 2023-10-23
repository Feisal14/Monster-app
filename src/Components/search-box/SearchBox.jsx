import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="search name"
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
