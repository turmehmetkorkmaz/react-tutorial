import Card from "./Card";
import "../pages/Home2.css";
import data from "../pages/data.json";
import {useState} from "react"


function Home2() {

  const [searchedValue,setSearchedValue]=useState("")
  const [filteredData,setfilteredData]=useState(data)

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(searchedValue);

    const filteredProducts=data.filter(product=>{
      
      const title=product.title.toUpperCase()
      const text=searchedValue.toUpperCase()
      return title.includes(text)  
    
    })
    setfilteredData(filteredProducts);


    }
    const handleChange=(e)=>{
      setSearchedValue(e.target.value);

  }

  return (
    <div>
      <div className="search">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} />
          <button type="submit">search</button>
        </form>
      </div>

      <div className="productList">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home2;
