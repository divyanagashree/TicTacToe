import {useState} from 'react';

function HooksTrial()
{
    const [color, setColor] = useState("red");

    return (

        <>
        <h1>color selected is {color}</h1>
        <div>
            
            <button onClick={() => {setColor("Blue")}}>Blue</button>
            <button onClick={() => {setColor("green")}}>green</button>

            <button onClick={() => {setColor("yellow")}}>yellow</button>
            <button onClick={() => {setColor("black")}}>black</button>
            <button onClick={() => {setColor("red")}}>reset</button>

        </div>
        </>
    )
}

export default HooksTrial;