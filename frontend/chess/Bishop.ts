import { CPiece } from "./CPiece";
import { IPieceProps } from "./types";

/**
 * Bishop
 */
export class Bishop extends CPiece {
  readonly name = "Bishop";

  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    super(props);
  }
}
