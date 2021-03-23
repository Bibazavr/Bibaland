import { IPieceProps } from "./types";
import { CPiece } from "./CPiece";

/**
 * Knight
 */
export class Knight extends CPiece {
  readonly name = "Knight";
  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
  }
}
