import Card from "./Card"
import "../pages/Home2.css"
import data from "../pages/data.json"

function Home2 () {

  return(
    <div>

      <div className= "productList">
      {
        data.map(product=><Card product={product} key={product.id}/>)
      }

      </div>
      
    </div>
  )

}
  

export default Home2