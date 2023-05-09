//import logo from './logo.svg';
//import Hooks from './concepts/useState';
//import HooksTrial from './concepts/useState2';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
//import logo from "./logo.svg";
import Icon from './components/Icon';

import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

import {Card, CardBody, Container, Button, Col, Row, NavbarBrand, Navbar } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//creating 9 boxes
const itemArray = new Array(9).fill("empty");

const App = () => {
  //create state
  const [isCross, setIsCross] = useState(false);
  //create a state to check who will be the winner. (winner, isWinner), isWinner should be true

  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    //set everything to initial values
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

    const checkIsWinner = () => {

      //checking winner of the game

      if(
        itemArray[0] === itemArray[1] &&
        itemArray[0] === itemArray[2] &&
        itemArray[0] !== "empty" 
      )
      {
        setWinMessage(`${itemArray[0]} won`);
      }     
    
      else if 
      (
        itemArray[3] !== "empty" &&
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5] 
      )
      {
        setWinMessage(`${itemArray[3]} won`);
      }

      else if 
        (
          itemArray[6] !== "empty" &&
          itemArray[6] === itemArray[7] &&
          itemArray[6] === itemArray[8] 
        )
        {
          setWinMessage(`${itemArray[6]} won`);
        }

        else if
        (
          itemArray[0] !== "empty" &&
          itemArray[0] === itemArray[3] &&
          itemArray[0] === itemArray[6] 
        )
        {
          setWinMessage(`${itemArray[0]} won`);
        }

        else if
        (
          itemArray[1] !== "empty" &&
          itemArray[1] === itemArray[4] &&
          itemArray[1] === itemArray[7] 
        )
        {
          setWinMessage(`${itemArray[1]} won`);
        }

        else if
        (
          itemArray[2] !== "empty" &&
          itemArray[2] === itemArray[5] &&
          itemArray[2] === itemArray[8] 
        )
        {
          setWinMessage(`${itemArray[2]} won`);
        }

        else if
        (
          itemArray[0] !== "empty" &&
          itemArray[0] === itemArray[4] &&
          itemArray[0] === itemArray[8] 
        )
        {
          setWinMessage(`${itemArray[0]} won`);
        }

        else if
        (
          itemArray[2] !== "empty" &&
          itemArray[2] === itemArray[4] &&
          itemArray[2] === itemArray[6] 
        )
        {
          setWinMessage(`${itemArray[2]} won`);
        }

        /*else
        {
          return toast("Draw!! Click on Reload", {type: "error"});
        }*/
      };

      const changeItem = itemNumber => 
  {
    if(winMessage)
    {
      return toast(winMessage, {type: "success"});
    }

    if(itemArray[itemNumber] === "empty")
    {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }
    else
    {
      return toast("already filled", {type: "error"});
    }

    checkIsWinner(); //checks who is the winner, calls the function

  };

  return (
    
   <>
   <Navbar 
    className="text-warning text-center"
    color="dark"
    dark>
    <img src=".https://www.flaticon.com/free-icon/tic-tac-toe_891957g" alt="img" />

    <NavbarBrand href="/" className="text-warning text-center">
      <h3 className="text-warning text-center">Tic-Tac-Toe</h3>
    </NavbarBrand>
   
    </Navbar>
     
     <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row className="row">
        <Col md={6} className="ofset-md-3">

            { winMessage ? ( //shows next turn
            <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMessage}
              </h1>
              </div>
          ) : (
            <h1 className="text-warning text-center">
            {isCross ? "cross" : "circle"} turn </h1> //shows winner

          )}


            <div className="grid">
              {itemArray.map((item,index)=> (
                <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box"> 
                <Icon name={item} />
                </CardBody>
              </Card>
              ))}
              </div>
              </Col>
              </Row>
              <br />
              
              <Button className="border" color="success" block onClick={reloadGame}> RELOAD GAME</Button>

               </Container>

               <div class="copyright text-center">
            <p>Copyrights © Divya. Self learned Self modified <i class="fa-regular fa-heart"></i></p>
        </div>
               </>
               );
                  };

export default App;
