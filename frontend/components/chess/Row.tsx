import { ICell } from "../../chess/types";
import { View } from "../Themed";
import { Cell } from "./Cell";
import React from "react";
import { StyleSheet } from "react-native";

interface IRowProps {
  cells: ICell[];
}
export const Row = (props: IRowProps) => {
  return (
    <View style={styles.container}>
      {props.cells.map((ceil, index) => {
        return <Cell key={index} ceil={ceil} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
