import React from "react";
import { StyleSheet } from "react-native";

import { ICell, ICord } from "../../chess/types";
import { View } from "../Themed";
import { Cell } from "./Cell";

interface IRowProps {
  cells: ICell[];
  onCellClick: (cord?: ICord) => void;
}
export const Row = (props: IRowProps) => {
  return (
    <View style={styles.container}>
      {props.cells.map((ceil, index) => {
        return (
          <Cell
            key={`cell${index}`}
            ceil={ceil}
            onCellClick={props.onCellClick}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
