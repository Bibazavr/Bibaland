import { Side } from "./types";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { Pawn } from "./Pawn";

export const defaultWhite: Side = {
  Bishops: [
    new Bishop({ cord: { y: 7, x: 2 }, color: "white" }),
    new Bishop({ cord: { y: 7, x: 5 }, color: "white" }),
  ],
  King: new King({ cord: { y: 7, x: 4 }, color: "white" }),
  Knights: [
    new Knight({ cord: { y: 7, x: 1 }, color: "white" }),
    new Knight({ cord: { y: 7, x: 6 }, color: "white" }),
  ],
  Queen: new Queen({ cord: { y: 7, x: 3 }, color: "white" }),
  Rooks: [
    new Rook({ cord: { y: 7, x: 0 }, color: "white" }),
    new Rook({ cord: { y: 7, x: 7 }, color: "white" }),
  ],
  Pawns: [new Pawn({ cord: { y: 6, x: 0 }, color: "white" })],
};

export const defaultBlack: Side = {
  Bishops: [
    new Bishop({ cord: { y: 0, x: 2 }, color: "black" }),
    new Bishop({ cord: { y: 0, x: 5 }, color: "black" }),
  ],
  King: new King({ cord: { y: 0, x: 4 }, color: "black" }),
  Knights: [
    new Knight({ cord: { y: 0, x: 1 }, color: "black" }),
    new Knight({ cord: { y: 0, x: 6 }, color: "black" }),
  ],
  Queen: new Queen({ cord: { y: 0, x: 3 }, color: "black" }),
  Rooks: [
    new Rook({ cord: { y: 0, x: 0 }, color: "black" }),
    new Rook({ cord: { y: 0, x: 7 }, color: "black" }),
  ],
  Pawns: [new Pawn({ cord: { y: 1, x: 0 }, color: "black" })],
};
