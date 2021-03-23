import { ICeil } from "../../chess/types";
import { View } from "../Themed";
import { Ceil } from "./Ceil";
import React from "react";
import { StyleSheet } from "react-native";

interface IRowProps {
  cells: ICeil[];
}
export const Row = (props: IRowProps) => {
  return (
    <View style={styles.container}>
      {props.cells.map((ceil, index) => {
        return <Ceil key={index} ceil={ceil} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
