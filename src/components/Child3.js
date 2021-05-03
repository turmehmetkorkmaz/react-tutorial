

export const Child3=({product, fnc})=>{
    return(
        <div className="child">
            <p>{product.title}</p>
            <p>{product.price}</p>
            <input type="number" onChange={fnc}/>
          
        </div>
    )
}





