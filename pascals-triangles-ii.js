var getRow = function (rowIndex) {
  let triangleRows = [[1], [1, 1]];
  for (let i = 2; i <= rowIndex; i++) {
    let newRow = [1];
    let tempRow = triangleRows[i - 1];
    for (let j = 1; j < tempRow.length; j++) {
      newRow.push(tempRow[j - 1] + tempRow[j]);
    }
    newRow.push(1);
    triangleRows.push(newRow);
  }
  return triangleRows[rowIndex];
};
