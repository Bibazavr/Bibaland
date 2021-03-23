import { Side } from "./types";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { Pawn } from "./Pawn";

export const defaultWhite: Side = {
  Bishops: [
    new Bishop({ cord: { x: 7, y: 2 }, color: "white" }),
    new Bishop({ cord: { x: 7, y: 5 }, color: "white" }),
  ],
  King: new King({ cord: { x: 7, y: 4 }, color: "white" }),
  Knights: [
    new Knight({ cord: { x: 7, y: 1 }, color: "white" }),
    new Knight({ cord: { x: 7, y: 6 }, color: "white" }),
  ],
  Queen: new Queen({ cord: { x: 7, y: 3 }, color: "white" }),
  Rooks: [
    new Rook({ cord: { x: 7, y: 0 }, color: "white" }),
    new Rook({ cord: { x: 7, y: 7 }, color: "white" }),
  ],
  Pawns: [new Pawn({ cord: { x: 6, y: 0 }, color: "white" })],
};

export const defaultBlack: Side = {
  Bishops: [
    new Bishop({ cord: { x: 0, y: 2 }, color: "black" }),
    new Bishop({ cord: { x: 0, y: 5 }, color: "black" }),
  ],
  King: new King({ cord: { x: 0, y: 4 }, color: "black" }),
  Knights: [
    new Knight({ cord: { x: 0, y: 1 }, color: "black" }),
    new Knight({ cord: { x: 0, y: 6 }, color: "black" }),
  ],
  Queen: new Queen({ cord: { x: 0, y: 3 }, color: "black" }),
  Rooks: [
    new Rook({ cord: { x: 0, y: 0 }, color: "black" }),
    new Rook({ cord: { x: 0, y: 7 }, color: "black" }),
  ],
  Pawns: [new Pawn({ cord: { x: 1, y: 0 }, color: "black" })],
};
