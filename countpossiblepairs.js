function countPossiblePairs(n, m) {
    var range=Math.max(n,m)
    var count=0;
    for(var x=0;x<=range;x++)
    {
        for(y=0;y<=range;y++)
        {
            if((x*x+y===n)&&(y*y+x===m))
            {
                count++;
            }
        }
    }
    console.log(count);
}