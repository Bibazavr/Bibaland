import React from "react";

import { View } from "../Themed";
import { Row } from "./Row";
import { StyleSheet } from "react-native";
import { CBoard } from "../../chess/CBoard";

interface IBoardProps {
  cboard: CBoard;
}

export const Board = (props: IBoardProps) => {
  return (
    <View style={styles.container}>
      {props.cboard.board.map((row, index) => {
        return <Row key={index} cells={row} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderWidth: 2,
    borderColor: "purple",
  },
});
