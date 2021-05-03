import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Parent4 from "../components/Parent4";

const HomePage4 = () => {
  const [val, setval] = useState("");

  const search = (p) => {
    setval(p);
  };

  console.log(val);

  return (
    <div>
      <SearchBar search={search}/>
      <Parent4 val={val} />
    </div>
  );
};

export default HomePage4;
