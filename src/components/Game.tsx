import React, { useState } from "react";
import initializeChessBoard from "../helpers/ChessBoardHelper";
import Piece from "../pieces/Piece";
import Board from "./Board";
import DefaultPeice from "../pieces/DefaultPiece";
import FallenSoldiersBlock from "./FallenSoldiersBlock";

const Game = () => {
  const [pieces, setPieces] = useState<Piece[]>(initializeChessBoard(8));
  const [player, setPlayer] = useState(1);
  const [whiteFallenSoldiers, setWhiteFallenSoldiers] = useState<Piece[]>([]);
  const [blackFallenSoldiers, setBlackFallenSoldiers] = useState<Piece[]>([]);
  const [sourceSelection, setSourceSelection] = useState(-1);
  const [status, setStatus] = useState("");
  const [turn, setTurn] = useState("white");

  const handleClick = (idx: number) => {
    console.log("On click ", pieces[idx]);
    // const tempPieces = pieces.slice();
    if (sourceSelection === -1) {
      if (!pieces[idx] || pieces[idx].player !== player) {
        setStatus(`Wrong selection. Choose player ${player} pieces.`);
      } else {
        pieces[idx].style = {
          ...pieces[idx].style,
          backgroundColor: "RGB(111,143,114)",
        };
        setStatus(`Choose destination for the selected piece`);
        setSourceSelection(idx);
      }
    } else if (sourceSelection > -1) {
      pieces[sourceSelection].style = {
        ...pieces[sourceSelection].style,
        backgroundColor: "",
      };

      if (pieces[idx] && pieces[idx].player === player) {
        setStatus("Wrong selection. Choose valid source and destination again");
        setSourceSelection(-1);
      } else {
        const isDestEnemyOccupied = pieces[idx] ? true : false;
        const piece = pieces[sourceSelection];
        const isMovePossible = piece.isMovePossible(
          sourceSelection,
          idx,
          isDestEnemyOccupied
        );
        const srcToDestPath = piece.getSrcToDestPath(sourceSelection, idx);
        const isLegalMove = isMoveLegal(srcToDestPath);
        if (isMovePossible && isLegalMove) {
          if (pieces[idx] != null) {
            if (pieces[idx].player == 1) {
              whiteFallenSoldiers.push(pieces[idx]);
            } else if (pieces[idx].player == 2) {
              blackFallenSoldiers.push(pieces[idx]);
            }
          }
          console.log("whiteFallenSoldiers", whiteFallenSoldiers);
          console.log("blackFallenSoldiers", blackFallenSoldiers);
          pieces[idx] = pieces[sourceSelection];
          pieces[sourceSelection] = new DefaultPeice();

          setStatus("");
          setSourceSelection(-1);
          setPieces([...pieces]);
          setWhiteFallenSoldiers([...whiteFallenSoldiers]);
          setBlackFallenSoldiers([...blackFallenSoldiers]);
          setPlayer(player == 1 ? 2 : 1);
          setTurn(turn === "white" ? "black" : "white");
        } else {
          setStatus(
            "Wrong selection. Choose valid source and destination again."
          );
          setSourceSelection(-1);
        }
      }
    }
  };

  const isMoveLegal = (srcToDestPath: number[]): boolean => {
    let isLegal = true;
    for (let i = 0; i < srcToDestPath.length; i++) {
      if (pieces[srcToDestPath[i]] !== null) {
        isLegal = false;
      }
    }
    return isLegal;
  };

  return (
    <div>
      <div className="game">
        <div className="game-board">
          <Board pieces={pieces} onClick={(i) => handleClick(i)}></Board>
        </div>
        <div className="game-info">
          <h3>Turn</h3>
          <div id="player-turn-box" style={{ backgroundColor: turn }}></div>
          <div className="game-status">{status}</div>
          <div className="fallen-soldier-block">
            <FallenSoldiersBlock
              whiteFallenSoldiers={whiteFallenSoldiers}
              blackFallenSoldiers={blackFallenSoldiers}
            ></FallenSoldiersBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
