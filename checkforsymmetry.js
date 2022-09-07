function checkForSymmetry(n, matrix)
{
 var l=0;r=(+n)-1,t=0,b=(+n)-1,h=true,v=true;
  if(+n===1 || +n===0)
   {
    console.log("NO");
   }
   else
   {
    while(t<b)
    {
        for(var i=0;i<=n-1;i++){
        if(matrix[t][i]!==matrix[b][i]){
            h=false;
        }
        }
        
    if(h===false)
        {
            break;
        }
        
        t++;
        b--;
    }
    
    while(l<r){
        for(var a=0;a<=n-1;a++)
        {
        if(matrix[a][l]!==matrix[a][r])
        {
            v=false;
        }
        }
        if(v===false){
            break;
        }
        
        l++;
        r--;
    }
    if(h&&v)
    {
     console.log("BOTH");
    }
    else if(h)
    {
     console.log("HORIZONTAL");
    }
    else if(v)
    {
     console.log("VERTICAL");
    }
    else
    {
     console.log("NO");
    }
 }
}

