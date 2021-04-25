import Duo from "./Duo"

const info=[
    {adres:"asdasd",tel:123231},
    {adres:"asdasd",tel:123231},
    {adres:"asdasd",tel:123231},
    {adres:"asdasd",tel:123231},
    {adres:"asdasd",tel:123231},
    {adres:"asdasd",tel:123231}
    
]

const Core=(props)=>{
    return(
        <div>
            <p>{props.per.name}</p>
            <p>{props.per.department}</p>
            <p>{props.per.salary}</p>
            {info.map=((adr,i)=>{
                return(
                    <Duo loc={adr} key={i}/>
                )
            })}
        </div>
    )
}
export default Core