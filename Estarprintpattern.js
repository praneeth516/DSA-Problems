function endOfUnit(N){
    var l=(N+1)/2;
    for(var i=1;i<=N;i++)
    {
        var bag="";
        for(var j=1;j<=N;j++)
        {
            if(i===1||i===N)
            {
                bag=bag+"*"+" ";
            }
            else if(i===l)
            {
                bag=bag+"*";
            }
            else if(j===1)
            {
                bag=bag+"*";
            }
        }
          console.log(bag);
    }
}