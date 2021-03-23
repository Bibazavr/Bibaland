import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { CBoard } from "../chess/CBoard";
import { Board } from "../components/chess/Board";
import { defaultBlack, defaultWhite } from "../chess/constants";

/**
 * TabOneScreen
 * @return {React.ReactElement}
 */
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Board cboard={new CBoard(defaultWhite, defaultBlack)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
