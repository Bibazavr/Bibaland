import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../Themed";
import { ICell } from "../../chess/types";
import { Piece } from "./Piece";

interface CellProps {
  ceil: ICell;
}
export const Cell = (props: CellProps): React.ReactElement => {
  return (
    <View style={styles(props).container}>
      <Piece piece={props.ceil.piece} />
    </View>
  );
};

const styles = (props: CellProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.ceil.color,
      width: 40,
      height: 40,
    },
  });
