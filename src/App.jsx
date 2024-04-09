import "./App.css";
import { useState } from "react";
import { Board } from "./components/Board.jsx";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { saveGameToStorage, removeGameToStorage } from "./logic/storage.js";
import { checkWinner, checkEndGame } from "./logic/board.js";
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

  // update the draw of the board.
  const updateBoard = (index) => {
    // if has a item inside, or if has a winner don't let us overwrite it
    if (board[index] || winner) return;

    // set the draw in a new board
    const newBoard = [...board];
    newBoard[index] = turn;
    //update board state
    setBoard(newBoard);

    //change player turn
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    //update turn state
    setTurn(newTurn);

    //Save the game-board
    saveGameToStorage({ newBoard, newTurn });
    // check if winner exists
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tateti</h1>

      <button onClick={resetGame}>Reset Game</button>

      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}

export default App;
