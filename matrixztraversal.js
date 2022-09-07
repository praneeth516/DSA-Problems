function zTraversal(N,arr){
    var i=0;bag="";
    for(var j=0;j<N;j++)
    {
        bag+=arr[0][j]+" ";
    }
    i=1;
    j=N-2;
    while(i<N&&j>=0)
    {
        bag+=arr[i][j]+" ";
        i++;
        j--;
    }
    for(i=1;i<N;i++)
    {
        bag+=arr[N-1][i]+" ";
    }
    console.log(bag);
  
}