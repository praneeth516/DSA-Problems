function sumOfSpecialPairs(N,A){
    let sum = 0;
    for(var i=0;i<N-1;i++) 
    {
        for(var j=i+1;j<N;j++)
        {
            if (primeornot(j-i)) 
            {
                sum=sum+Math.abs(A[i]-A[j]);
            }
         }
    }
    console.log(sum);
    function primeornot(n)
 {
    if(n<=1)
    {
    return false;
    }
    for (var i=2;i<n;i++)
    {
        if(n%i===0)
        {
            return false;
        }
    }
    return true;
}
}