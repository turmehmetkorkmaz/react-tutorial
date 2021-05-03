import { useState } from "react";

const SearchBar = ({search}) => {
  const [searchedvalue, setsearchedvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchedvalue)
  };

  

  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <input type="text" onChange={(e) => setsearchedvalue(e.target.value)} className="input"/>

      <button type="submit">Submit et</button>
    </form>
  );
};

export default SearchBar;
