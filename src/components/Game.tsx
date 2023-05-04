import React, { useState } from "react";
import Piece from "../pieces/Piece";
import Board from "./Board";
import FallenSoldiersBlock from "./FallenSoldiersBlock";
import validateMove from "../helpers/ValidationHelper";
import initializeChessBoard from "../helpers/ChessBoardHelper";
import Square from "../pieces/Square";
import DummyPiece from "../pieces/DummyPiece";
import ChessPieces from "../helpers/ChessPieceNames";

const Game = () => {
  const size = 8;
  const [squares, setSquares] = useState<Square[][]>(
    initializeChessBoard(size)
  );
  const [player, setPlayer] = useState(1);
  const [whiteFallenSoldiers, setWhiteFallenSoldiers] = useState<Square[]>([]);
  const [blackFallenSoldiers, setBlackFallenSoldiers] = useState<Square[]>([]);
  const [status, setStatus] = useState("");
  const [turn, setTurn] = useState("white");
  const [gameOver, setGameOver] = useState(false);
  const [srcSquare, setSrcSquare] = useState<Square | null>(null);

  const setFallenSoldiers = (square: Square): boolean => {
    const { piece } = square;
    let result = true;
    if (piece.player !== -1 && piece.player !== player) {
      if (piece.name === ChessPieces.KING) {
        setGameOver(true);
        result = false;
      }
      if (piece.player === 1) {
        whiteFallenSoldiers.push(square);
        setWhiteFallenSoldiers([...whiteFallenSoldiers]);
      } else {
        blackFallenSoldiers.push(square);
        setBlackFallenSoldiers([...blackFallenSoldiers]);
      }
    }
    return result;
  };

  const handleClick = (selectedSquare: Square) => {
    if (gameOver) return;
    console.log(selectedSquare, player);
    setStatus("");
    if (!validateMove(srcSquare, selectedSquare, player, setStatus)) {
      return;
    }
    if (srcSquare == null || selectedSquare.piece.player == player) {
      srcSquare && srcSquare.clearBackGround();
      selectedSquare.highlightBackGround();
      setSrcSquare(selectedSquare);
      setSquares([...squares]);
      return;
    }

    const isValidMove = srcSquare.piece.validateMove(
      srcSquare,
      selectedSquare,
      squares
    );

    if (!isValidMove) {
      setStatus("Wrong Move. Please choose correct Move");
      return;
    }

    squares[srcSquare.rowIdx][srcSquare.colIdx] = new Square(
      srcSquare.rowIdx,
      srcSquare.colIdx,
      new DummyPiece()
    );
    squares[selectedSquare.rowIdx][selectedSquare.colIdx] = new Square(
      selectedSquare.rowIdx,
      selectedSquare.colIdx,
      srcSquare.piece
    );
    squares[selectedSquare.rowIdx][selectedSquare.colIdx].clearBackGround();

    const continueGame = setFallenSoldiers(selectedSquare);

    if (!continueGame) {
      return;
    }

    setSrcSquare(null);
    setSquares([...squares]);
    setPlayer(player == 1 ? 2 : 1);
    setTurn(turn === "white" ? "black" : "white");
  };

  return (
    <>
      {gameOver && (
        <div className="game-result">{`Player ${player} Won the Match`}</div>
      )}
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(square: Square) => handleClick(square)}
            squares={squares}
            size={size}
          ></Board>
        </div>
        <div className="game-info">
          <h3>Turn</h3>
          <div id="player-turn-box" style={{ backgroundColor: turn }}></div>
          <div className="game-status danger">{status}</div>
          <div className="fallen-soldier-block">
            <FallenSoldiersBlock
              whiteFallenSoldiers={whiteFallenSoldiers}
              blackFallenSoldiers={blackFallenSoldiers}
            ></FallenSoldiersBlock>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
