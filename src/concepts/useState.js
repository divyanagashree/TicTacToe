import {useState, useEffect} from 'react';

function Hooks() {
    //this.state={
        //count: 0
    //}

    const [count, setCount] = useState(0); //useState syntax, requires previous/initial state and new state in an array, 0 is initial state 
    //usestate uses initial state and returns initial state and updated state

    // () is waiting for an event to happen
    //once event happens(click in this scenario) setcount will be updated
    //since setCount is a state, it will act aa function and take current count as arg and increment the value on every click
    console.log("useState is being rendered");


    useEffect(() => {
        console.log("first log");
        //fetch(api, data)
        return() => {
            console.log("second log");
        }
    }, [/*deleting elements are writtten here*/])

    //useeffect syntax:
    //useEffect(() => {}, []);
    //useEffect needs two parameters
    //1. callback function, 2. empty array
    //can be used to run functions that needs to be run as soon as page loads
    //mostly used to initialize everyhtign needed in the code


    return(
        <div>Starting hooks
            <h1>counter app</h1>
            <button onClick = { () => {setCount(count + 1)}}> click me</button>
            <button onClick = { () => {setCount(count - 1)}}> click me to reduce count</button>
            <button onClick = { () => {setCount(0)}}> click me to reset</button>

            <h2>current count :{count}</h2>


        </div>
    )
}

export default Hooks;