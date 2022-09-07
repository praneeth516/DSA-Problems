function categoryOfStringII(size,array){
    var bag="";
    var lower="abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<size;i++)
    {
        for(var j=0;j<=lower.length;j++)
        {
            if(array[i]==j)
            {
                bag+=lower[j-1];
            }
        }
    }
    console.log(bag);
}