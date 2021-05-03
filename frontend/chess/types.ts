import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { CPiece } from "./CPiece";

export interface Side {
  Queen: Queen;
  Knights: Knight[];
  Bishops: Bishop[];
  King: King;
  Pawns: Pawn[];
  Rooks: Rook[];
}

export type ICord = { x: number; y: number };

export type IColor = "black" | "white";
export type ICell = { color: IColor; piece: CPiece | null; point?: boolean };
export type IBoard = ICell[][];

export interface IPieceProps {
  cord: ICord;
  color: IColor;
}
