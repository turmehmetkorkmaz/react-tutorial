export const Child=(props)=>{
    console.log(props)
    return(
        <div className="child">
            <p>{props.product.title}</p>
            
            <p>{props.product.price}</p>
            <img src={props.product.img} width="150" height="200" alt=""/>
        </div>
    )
}