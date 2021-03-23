import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../Themed";
import { ICeil } from "../../chess/types";
import { Piece } from "./Piece";

interface CielProps {
  ceil: ICeil;
}
export const Ceil = (props: CielProps): React.ReactElement => {
  return (
    <View style={styles(props).container}>
      <Piece piece={props.ceil.piece} />
    </View>
  );
};

const styles = (props: CielProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.ceil.color,
      width: 40,
      height: 40,
    },
  });
