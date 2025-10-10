import { CELL_SIZE } from "./constants";

interface CellProps {
  position: {
    x: string;
    y: string;
  };
}

export default function Cell({ position: { x, y } }: CellProps) {
  const styles = {
    backgroundColor: "black",
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    left: x,
    bottom: y,
    position: "absolute" as const,
  };

  return <div style={styles} />;
}
