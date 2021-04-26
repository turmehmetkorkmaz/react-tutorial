import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Tutorial2 from "../components/Tutorial2";

const Tutorial1 = () => {

    const [val, setval]=useState("")

    const serarch =(p)=>{
        setval(p)
    }

    return (
        <div>
            <SearchBar />
            <Tutorial2 />
        </div>
    )
}

export default Tutorial1;
