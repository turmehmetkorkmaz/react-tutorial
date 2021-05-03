export const Child4 = ({ product, fnc }) => {

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    console.log("clicked", e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="child">
      <p>{product.title}</p>
      <img src={product.img} alt="" />
      <p>{product.price}</p>
      <button onClick={handleClick}>Details</button>

      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
