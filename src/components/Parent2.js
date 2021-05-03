import {Child2} from "../components/Child2"


const data=[
    {title:"samsung",price:35},
    {title:"sony",price:45},
    {title:"iphone",price:55},
    {title:"huawei",price:65}
]
const Parent2=()=>{


    return(

<div className="parent">

{data.map((p,i)=>{
    return(
        <Child2 product={p}/>
    )
}
)}

</div>

    )
}
export default Parent2