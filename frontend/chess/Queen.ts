import { IPieceProps } from "./types";
import { CPiece } from "./CPiece";

/**
 * Queen
 */
export class Queen extends CPiece {
  readonly name = "Queen";
  /**
   *
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
  }
}
