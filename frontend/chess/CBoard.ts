import { setIn } from "immutable";

import { IBoard, ICord, Side } from "./types";
import { CPiece } from "./CPiece";

/**
 * add colors for Board
 * @param {CBoard} board
 * @return {CBoard}
 */
const initBoardColor = (board: IBoard): IBoard => {
  return board.map((row, iRow) => {
    return row.map((ceil, iCeil) => {
      return {
        ...ceil,
        color:
          (iRow % 2 === 0 && iCeil % 2 === 0) ||
          (iRow % 2 !== 0 && iCeil % 2 !== 0)
            ? "white"
            : "black",
      };
    });
  });
};

/**
 * Board
 */
export class CBoard {
  board: IBoard;
  private readonly white: Side;
  private readonly black: Side;

  /**
   * Initialization
   * @param {Side} white
   * @param {Side} black
   */
  constructor(white: Side, black: Side) {
    this.white = white;
    this.black = black;
    this.board = [
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}],
    ] as IBoard;
    this.board = initBoardColor(this.board);
    this.initPiecesSide(this.black);
    this.initPiecesSide(this.white);
  }

  /**
   * add PieceOnBoard
   * @param {CPiece} piece
   */
  addPieceOnBoard(piece: CPiece) {
    const { cord } = piece;
    this.board = setIn(this.board, [cord.y, cord.x, "piece"], piece);
  }

  /**
   * initPieces
   * @param {Side} side
   */
  initPiecesSide(side: Side) {
    side.Pawns.forEach((piece) => this.addPieceOnBoard(piece));
    side.Rooks.forEach((piece) => this.addPieceOnBoard(piece));
    side.Bishops.forEach((piece) => this.addPieceOnBoard(piece));
    side.Knights.forEach((piece) => this.addPieceOnBoard(piece));
    this.addPieceOnBoard(side.Queen);
    this.addPieceOnBoard(side.King);
  }

  /**
   * onBordClick
   * @param {ICord} cord
   */
  onBoardClick = (cord?: ICord) => {
    if (!cord) return;

    const piece = this.board[cord.y][cord.x].piece;

    if (!piece) return;

    const moves = piece.getMoves();

    moves.forEach((move) => {
      this.board = setIn(this.board, [move.y, move.x, "point"], true);
    });
  };
}
