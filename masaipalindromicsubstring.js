function masaiPalSubString(S){
    var n=S.length,length=1,start=0;
    for(let i=0;i<S.length;i++)
    {
        for(let j=i;j<S.length;j++) 
        {
            var flag = 1;
            for (let k = 0; k < (j - i + 1) / 2; k++)
            {
                if (S[i+k]!=S[j-k])
                    flag=0;
            }
            if (flag!==0&&(j-i+1)>length) {
                start=i;
                length=j-i+1;
            }
        }
    }
    console.log(length);
}