import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ICell, ICord } from "../../chess/types";
import { Piece } from "./Piece";
import { Point } from "./Point";

interface CellProps {
  ceil: ICell;
  onCellClick: (cord?: ICord) => void;
}
export const Cell = (props: CellProps): React.ReactElement => {
  const { piece, point } = props.ceil;
  return (
    <TouchableOpacity
      style={styles(props).container}
      onPress={() => props.onCellClick(piece?.cord)}
    >
      <Point point={point} />
      <Piece piece={piece} />
    </TouchableOpacity>
  );
};

const styles = (props: CellProps) =>
  StyleSheet.create({
    container: {
      position: "relative",
      backgroundColor: props.ceil.color,
      width: 40,
      height: 40,
    },
  });
