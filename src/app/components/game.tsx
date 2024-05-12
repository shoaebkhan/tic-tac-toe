import React, { useState } from 'react'
import GameBoard from './board'

function Game() {
    const [history, setHistory]=useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove]=useState(0);
    const xIsNext = currentMove %2===0;
    const currentSqaures=history[currentMove];
    
    function handlePlay(nextSquares:any[]){
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
        
    }

    function jumpTo(nextMove:any){
        setCurrentMove(nextMove);
    
    }
    const moves=history.map((squares, move)=>{
        let description;
        if(move>0)
            description='Go to move #' + move;
        else
            description='Go to game start';
        return(
            <li key={move}>
                <button onClick={()=>jumpTo(move)}>
                    {description}
                </button>
            </li>
        );
    });

    
  return (
    <div className='game'>
        <div className='board-row'>
            <GameBoard xIsNext={xIsNext} squares={currentSqaures} onPlay={handlePlay}/>            
        </div>
        <div className='game-info'>
            <ol>
                {moves}
            </ol>
        </div>
    </div>
  )
}

export default Game