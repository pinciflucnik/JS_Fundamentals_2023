function equalNeighbors(matrix){
  let neighboorCount = 0;
  // function searchHorizontaly(matrixToSearch){
  //   let confirmedNeighbors = 0
  //   for (let row = 0; row < matrixToSearch.length; row++){
  //     let counter = 0;
  //     for (let col =0; col < matrixToSearch[row].length; col++){
  //       if (matrixToSearch[row].includes(matrixToSearch[row][col],col+1)){
  //         let firstIndex = matrixToSearch[row].indexOf(matrixToSearch[row][col]);
  //         let secondIndex = matrixToSearch[row].indexOf(matrixToSearch[row][col],col+1)
  //         if (counter > 0){
  //           firstIndex = firstIndex +counter;
  //         }
  //         if(Math.abs(firstIndex - secondIndex) === 1){
  //           confirmedNeighbors++;
  //           counter++;
  //         }
  //       }
  //     }
  //   }
  //   return confirmedNeighbors;
  // }

  function searchHorizontaly(matrixToSearch){
    let confirmedNeighbors = 0;
    for (let i =0; i < matrixToSearch.length; i++){
      for (let m =0; m < matrixToSearch[i].length; m++){
        if (m > 0){
          let current = matrix[i][m];
          let previous = matrix[i][m-1];
          if (current === previous){
            confirmedNeighbors ++;
          }
        }
      }
    }
    return confirmedNeighbors;
  }

  function reverseRowAndColumns(matrixToAlter){

    let alteredMatrix = [];
    for (let i =0; i < matrixToAlter[0].length; i++){
      let newRow = [];
      for (let m = 0; m < matrixToAlter.length; m++){
        newRow.push(matrix[m][i]);
      }
      alteredMatrix.push(newRow);
    }
    return alteredMatrix;
  }
  neighboorCount = searchHorizontaly(matrix);
  matrix = reverseRowAndColumns(matrix);
  neighboorCount += searchHorizontaly(matrix);
  console.log(neighboorCount);
}
equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
)