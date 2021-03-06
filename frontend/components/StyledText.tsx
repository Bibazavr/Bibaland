import * as React from "react";

import { Text, TextProps } from "./Themed";

/**
 * MonoText
 * @param {TextProps} props
 * @return {React.ReactElement}
 */
export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}
