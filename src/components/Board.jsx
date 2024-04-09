import { Square } from "./Square";

export const Board = ({board, handleSquareClick}) => {    
return(
<section className="game">
        {board.map((square, index) => {
          return (
            <Square
             key={index} 
             index={index} 
             handleSquareClick={handleSquareClick}>
              {square}
            </Square>
          );
        })}
      </section>
)
}
