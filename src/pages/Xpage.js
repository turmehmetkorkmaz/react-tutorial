import { useState } from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";

const Xpage = () => {
  const [Sayac, setSayac] = useState(0);
  const [val, setval] = useState ("");

  const increase = () => {
    setSayac(Sayac + 1);
  };

  const submitted = () =>{
      setval(val)

  }

  return (
    <div>
      <Component1 inc={increase} sbd={submitted} />
      <Component2 syc={Sayac} />
    </div>
  );
};

export default Xpage;
