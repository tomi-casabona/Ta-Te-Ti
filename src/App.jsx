import "./App.css";
import { useState } from "react";
import { Board } from "./components/Board.jsx";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { saveGameToStorage, removeGameToStorage } from "./logic/storage.js";
import { checkWinner, checkEndGame, updateBoard } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import confetti from "canvas-confetti";

function App() {
  // if board exists, set the state board with the game started. if not, create a new empty board
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ? turnFromLocalStorage : TURNS.x;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    removeGameToStorage();
  };

  const handleSquareClick = (index) =>{
    //update board
    const newBoard = updateBoard(board,index,turn,winner);
    setBoard(newBoard);
    //update turn
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    //set board state
     setTurn(newTurn);
    //save game
     saveGameToStorage({newBoard, newTurn});
      // check if winner exists
     const newWinner = checkWinner(newBoard);
     if (newWinner) {
       confetti();
       setWinner(newWinner);
     } else if (checkEndGame(newBoard)) {
      //winner false = due to end game
       setWinner(false);
  }}

  return (
    <main className="board">
      <h1>Tateti</h1>

      <button onClick={resetGame}>Reset Game</button>

      <Board board={board} handleSquareClick={handleSquareClick} />

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}

export default App;
