function ediblePlants(N,edible,M,plants){
    var count=0;
    for(var i=0;i<M;i++)
    {
        for(var j=0;j<M;j++)
        {
           if(edible[i]==plants[j])
           {
               count++;
           }
        }
    }
    console.log(count);
}
