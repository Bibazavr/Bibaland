import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../Themed";

interface IPointProps {
  point?: boolean;
}
export const Point = (props: IPointProps) => {
  if (!props.point) return null;
  return (
    <View style={styles.container}>
      <View style={styles.point} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  point: {
    width: 10,
    height: 10,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "red",
  },
});
