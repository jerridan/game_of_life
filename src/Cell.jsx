import React from "react";

export default function Cell({ x, y }) {
  const styles = {
    backgroundColor: "black",
    width: "10px",
    height: "10px",
    left: x,
    bottom: y,
    position: "absolute"
  };

  return <div style={styles}/>
}
