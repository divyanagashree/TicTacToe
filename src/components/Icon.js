/* pseudo code

//flow
state: whose turn is it
    who is the winner

//restart
//select player: X and O
//update marking

winner logic
{
    winner: horizontal or vertical or diagonally same symbol/icons
}

//draw
*/

//-----------------------------------

/*
UI of the game

grid layout
can use bootstrap
//show message: whose turn is it
//wrong move
//icons for players (after selecting)
//show winner
//restart button

using library 
bootstrap : npm install --save bootstrap
 react toastify: npm i react-toastify
    reactstrap: npm install reactstrap react react-dom
        react icons: npm i react-icons

*/

//ui is written in app.js

import React from "react";
import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";
// for icons

const Icon = ({ name }) => {
    switch(name) {
        case "circle":
            return <FaRegCircle className="icons" />;
        case "cross":
            return <FaTimes classname="icons" />;
        default:
            return <FaPen className="icons"/>;
    }

};

export default Icon;
