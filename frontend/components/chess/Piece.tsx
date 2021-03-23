import React from "react";

import { CPiece } from "../../chess/CPiece";
import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";

interface IPieceProps {
  piece: CPiece | null;
}

export const Piece = (props: IPieceProps): React.ReactElement | null => {
  if (!props.piece) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.piece.color}
        {props.piece.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});
