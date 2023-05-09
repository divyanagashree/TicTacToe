import React, {useState} from 'react';

function form()
{
    //1. use name set variable to understand what is initial value and what is updated value
    const [name, setName] = useState("divya")

    //2. can only use these on top level, before return. 

    //3/ can not call the react hooks inside regular function

    //4. can not use in conditional statements

    return(
        <div>form</div>
    )
}

export default form;