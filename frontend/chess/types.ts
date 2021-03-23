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
export type ICeil = { color: IColor; piece: CPiece | null };
export type IBoard = ICeil[][];

export interface IPieceProps {
  cord: ICord;
  color: IColor;
}
