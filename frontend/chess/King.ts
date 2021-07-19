import { IPieceProps } from "./types";
import { CPiece } from "./CPiece";

/**
 * King
 */
export class King extends CPiece {
  readonly name = "King";
  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
  }
}
