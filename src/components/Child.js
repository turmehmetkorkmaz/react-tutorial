export const Child = (props) =>{
    console.log(props);
    props.fnc()
    props.fnc2(5)
    props.fnc3("example3childdan gelsin")

    return(
        <div>
            hello from Child {props.name}
            <div>
            {
                props.data.map((person, index)=>{
                    return(
                        <p key={index}>
                            {person}
                        </p>
                    )
                })
            }
        </div>
        </div>
        
    )
}