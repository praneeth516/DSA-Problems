function sumOfBoundaryAndDiagonal(matrix){
    var sum=0;
  for(var i=0;i<matrix.length;i++)
  {
      for(var j=0;j<matrix.length;j++)
      {
          if(i==j||(i+j)===matrix.length-1)
          {
              sum+=matrix[i][j];
          }
          else if(i===0||j===0||i===matrix.length-1||j===matrix.length-1)
          {
              sum+=matrix[i][j];
          }
      }
  }
  console.log(sum);
}