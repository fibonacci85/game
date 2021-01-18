import React, { useState } from 'react'

function GameBoard() {

    const [clicked, setClicked] = useState(false);
    const [square, setsquare] = useState([])

    const handleClick = (e) => {
        e.preventDefault();
        setClicked(!clicked)
    }



  return (
    <div className="gameBoard">
        <div className="box1">
            <div className={clicked ? "clicked" : "box1"}  onClick={handleClick}>X</div>
        </div>
        <div className="box2">
        <div className={clicked ? "clicked" : "box2"}  onClick={handleClick}>X</div>
        </div>
        <div className="box3">
        <div className={clicked ? "clicked" : "box3"}  onClick={handleClick}>X</div>
        </div>
        <div className="box4">
        <div className={clicked ? "clicked" : "box4"}  onClick={handleClick}>X</div>
        </div>
        <div className="box5">
        <div className={clicked ? "clicked" : "box5"}  onClick={handleClick}>X</div>
        </div>
        <div className="box6">
        <div className={clicked ? "clicked" : "box6"}  onClick={handleClick}>X</div>
        </div>
        <div className="box7">
        <div className={clicked ? "clicked" : "box7"}  onClick={handleClick}>X</div>
        </div>
        <div className="box8">
        <div className={clicked ? "clicked" : "box8"}  onClick={handleClick}>X</div>
        </div>
        <div className="box9">
        <div className={clicked ? "clicked" : "box9"}  onClick={handleClick}>X</div>
        </div>
    </div>
  );
}

export default GameBoard;
