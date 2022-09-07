function cirTraversal(matrix,N) {
    var bag="";
  for(var i=N-1;i>=0;i--)
  {
     bag+=matrix[i][0]+" ";
  }
  for(i=1;i<N;i++)
  {
      bag+=matrix[0][i]+" ";
  }
   for(i=1;i<N;i++)
  {
     bag+=matrix[i][N-1]+" ";
  }
  for(i=N-2;i>0;i--)
  {
      bag+=matrix[N-1][i]+" ";
  }
   console.log(bag);
}