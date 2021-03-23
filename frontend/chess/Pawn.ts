import { CPiece } from "./CPiece";
import { IPieceProps } from "./types";

/**
 * Pawn
 */
export class Pawn extends CPiece {
  readonly name = "Pawn";
  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
  }
}
