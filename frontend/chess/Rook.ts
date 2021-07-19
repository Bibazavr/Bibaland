import { CPiece } from "./CPiece";
import { IPieceProps } from "./types";

/**
 * Rook
 */
export class Rook extends CPiece {
  readonly name = "Rook";
  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
  }
}
