import "./Card.css";

// id: 0
// imgURL: "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg"
// inStock: true
// price: "₺134,77"
// title: "Xiaomi Mi True Wireless Earbuds"

function Card({ product }) {
  return (
    <div className="card">
      <img className="img" src={product.imgURL} alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p style={{color:product.inStock ? "green" : "red"}}>{product.inStock ? "available" : "unavailable"}</p>
    </div>
  );
}

export default Card;
