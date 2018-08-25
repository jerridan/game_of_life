import React from "react";
import { CELL_SIZE } from "./constants";

export default function Cell({ position: { x, y } }) {
  const styles = {
    backgroundColor: "black",
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    left: x,
    bottom: y,
    position: "absolute",
  };

  return <div style={styles} />;
}
