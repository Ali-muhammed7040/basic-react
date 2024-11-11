// import React, { useState } from "react";
// import "../App.css"; // Assuming you have basic CSS styling

// const TicTacToe = () => {
//   // Initialize the game board and player turn
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(true);
//   const [winner, setWinner] = useState(null);

//   // Handle a square click
//   const handleClick = (index) => {
//     if (board[index] || winner) return; // Prevent overriding or playing after a win

//     const newBoard = [...board];
//     newBoard[index] = isXNext ? "X" : "O"; // Set X or O
//     setBoard(newBoard);
//     setIsXNext(!isXNext); // Toggle player turn
//     checkWinner(newBoard); // Check if the new board has a winner
//   };

//   // Check for a winner
//   const checkWinner = (newBoard) => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (
//         newBoard[a] &&
//         newBoard[a] === newBoard[b] &&
//         newBoard[a] === newBoard[c]
//       ) {
//         setWinner(newBoard[a]);
//         return;
//       }
//     }

//     // Check for a tie (no winner and all squares filled)
//     if (newBoard.every((square) => square !== null)) {
//       setWinner("Tie");
//     }
//   };

//   // Reset the game
//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//   };

//   // Render a single square
//   const renderSquare = (index) => (
//     <button className="square" onClick={() => handleClick(index)}>
//       {board[index]}
//     </button>
//   );

//   return (
//     <div className="game">
//       <h1 style={{ color: "white" }}>Tic Tac Toe</h1>
//       <div className="board">
//         <div className="row">
//           {renderSquare(0)}
//           {renderSquare(1)}
//           {renderSquare(2)}
//         </div>
//         <div className="row">
//           {renderSquare(3)}
//           {renderSquare(4)}
//           {renderSquare(5)}
//         </div>
//         <div className="row">
//           {renderSquare(6)}
//           {renderSquare(7)}
//           {renderSquare(8)}
//         </div>
//       </div>
//       <div className="status">
//         {winner ? (
//           <h2 style={{ color: "white" }}>
//             {winner === "Tie" ? "It's a Tie!" : `Winner: ${winner}`}
//           </h2>
//         ) : (
//           <h2 style={{ color: "white" }}>Next Player: {isXNext ? "X" : "O"}</h2>
//         )}
//       </div>
//       <button className="reset-button" onClick={resetGame}>
//         Reset Game
//       </button>
//     </div>
//   );
// };

// export default TicTacToe;

import React, { useState } from "react";
import "../App.css"; // Updated styles with celebration effects

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState([]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        setWinningSquares([a, b, c]);
        return;
      }
    }

    if (newBoard.every((square) => square !== null)) {
      setWinner("Tie");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningSquares([]);
  };

  const renderSquare = (index) => (
    <button
      className={`square ${winningSquares.includes(index) ? "winner" : ""}`}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  // Generate celebration bubbles
  const renderCelebration = () => (
    <div className="celebration">
      {Array(20)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="bubble" />
        ))}
    </div>
  );

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <p style={{ marginLeft: "8px" }}> {winner && renderCelebration()}</p>
      <p style={{ marginLeft: "12px" }}> {winner && renderCelebration()}</p>
      <p style={{ marginLeft: "16px" }}> {winner && renderCelebration()}</p>
      <p style={{ marginLeft: "20px" }}> {winner && renderCelebration()}</p>
      <p style={{ marginLeft: "24pxpx" }}> {winner && renderCelebration()}</p>

      <div className="status">
        {winner ? (
          <h2>{winner === "Tie" ? "It's a Tie!" : `Winner: ${winner}`}</h2>
        ) : (
          <h2>Next Player: {isXNext ? "X" : "O"}</h2>
        )}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
