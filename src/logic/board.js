import { WINNER_COMBOS } from "../constants";

//check if any WINNER COMBO is present in the board. Then return the winner or null
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //if there is not winner
  return null;
}

// check if every single square is not null. then return true or false
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null)
}

//update the game board every single click
export function updateBoard(board, index, turn, winner) {
  if (board[index] || winner) return;
  const newBoard = [...board];
  newBoard[index] = turn;
  return newBoard;
}