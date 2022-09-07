function sumWithoutBorders(N, M, matrix){
    var sum=0;
    for(var i=1;i<N-1;i++)
    {
        for(var j=1;j<M-1;j++)
        {
           sum+=matrix[i][j];
        }
    }
    console.log(sum);
}