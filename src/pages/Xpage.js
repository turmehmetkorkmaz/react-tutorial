import {useState} from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";

const Xpage = () => {
    const[Sayac, setSayac]=useState(0)

    const increase=()=>{
        setSayac(Sayac+1)

        


        
    }

    return (

        <div>
            <Component1 inc={increase}/>
            <Component2 syc={Sayac}/>
        </div>
    )
}

export default Xpage;
