export default function getCoordinates(cells) {
  return Object.entries(cells).reduce((accumulator, columnArray) => {
    const xCoordinate = columnArray[0];
    const yCoordinates = columnArray[1];
    return accumulator.concat(
      yCoordinates.map(yCoordinate => [xCoordinate, yCoordinate]),
    );
  }, []);
}
