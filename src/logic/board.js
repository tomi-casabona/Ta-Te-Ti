import { WINNER_COMBOS } from "../constants";

//check if any WINNER COMBO is present in the board. Then return the winner or null
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo 
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
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


  //   // update the draw of the board.
  // export const updateBoard = (index, board, winner, turn) => {
  //   // if has a item inside, or if has a winner don't let us overwrite it
  //   if (board[index] || winner) return;

  //   // set the draw in a new board
  //   const newBoard = [...board];
  //   newBoard[index] = turn;
  //   //update board state
  //   setBoard(newBoard);

  //   //change player turn
  //   const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
  //   //update turn state
  //   setTurn(newTurn);

  //   //Save the game-board
  //   saveGameToStorage({ newBoard, newTurn });
  //   // check if winner exists
  //   const newWinner = checkWinner(newBoard);
  //   if (newWinner) {
  //     confetti();
  //     setWinner(newWinner);
  //   } else if (checkEndGame(newBoard)) {
  //     setWinner(false);
  //   }
  // };
