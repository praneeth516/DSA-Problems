function solve(N,arr){
    var bag="";
    if(N===1)
    {
        return;
    }
        for(var i=0;i<N-1;i++)
        {
             for (j=0;j<N-i-1;j++)
             {
              if(arr[j]>arr[j+1])
               {
                 var temp=arr[j];
                 arr[j]=arr[j+1];
                 arr[j+1]=temp;
               }
        }
    }
    for(var k=0;k<arr.length;k++)
    {
        bag+=arr[k]+" ";
    }
 console.log(bag);
}