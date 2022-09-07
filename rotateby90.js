function rotateBy90(R, matrix){
    var bag="";
    for(var x=0;x<R/2;x++)
    {
        for(var y=x;y<R-x-1;y++)
        {
            let temp=matrix[x][y];
            matrix[x][y]=matrix[y][R-1-x];
            matrix[y][R-1-x]=matrix[R-1-x][R-1-y];
            matrix[R-1-x][R-1-y]=matrix[R-1-y][x];
            matrix[R-1-y][x]=temp;
        }
    }
    for(var i=0;i<R;i++)
    {
        for(var j=0;j<R;j++)
        {
            bag+=matrix[i][j]+" ";
        }
        bag+="\n";
    }
    console.log(bag);
}