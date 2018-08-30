export default function getPositionsByColumn(coordinateList) {
  return coordinateList.reduce((accumulator, coordinates) => {
    if (accumulator[coordinates[0]]) {
      return {
        ...accumulator,
        [coordinates[0]]: accumulator[coordinates[0]].concat(coordinates[1]).sort(),
      };
    }
    return {
      ...accumulator,
      [coordinates[0]]: [coordinates[1]],
    };
  }, {});
}
