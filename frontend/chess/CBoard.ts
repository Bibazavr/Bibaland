import { IBoard, Side } from "./types";
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
  readonly board: IBoard;
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
   * @param {CPiece} Piece
   */
  addPieceOnBoard(Piece: CPiece) {
    this.board[Piece.cord.x][Piece.cord.y].piece = Piece;
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
}
