import { CPiece } from "./CPiece";
import { ICord, IPieceProps } from "./types";

/**
 * Pawn
 */
export class Pawn extends CPiece {
  readonly name = "Pawn";
  isFirstMove: boolean;

  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
    this.isFirstMove = true;
  }

  /**
   * move
   * @return {ICord[]}
   */
  getMoves = (): ICord[] => {
    const moves = [];

    switch (this.color) {
      case "black":
        moves.push({ x: this.cord.x, y: this.cord.y + 1 });

        if (this.isFirstMove)
          moves.push({ x: this.cord.x, y: this.cord.y + 2 });

        return moves;

      case "white":
        moves.push({ x: this.cord.x, y: this.cord.y - 1 });

        if (this.isFirstMove)
          moves.push({ x: this.cord.x, y: this.cord.y - 2 });

        return moves;
    }
  };

  move = () => {
    this.isFirstMove = false;
  };
}
