import { IColor, ICord, IPieceProps } from "./types";

/**
 * Piece
 */
export class CPiece {
  readonly name: string = "Piece";
  readonly cord: ICord;
  readonly color: IColor;

  /**
   * @param {IPieceProps} props
   */
  constructor(props: IPieceProps) {
    this.cord = props.cord;
    this.color = props.color;
  }
  move = () => {};
}
