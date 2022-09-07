function generateALlSubstr(N,A){
    var i,j,result=[];
  for(i=0;i<N;i++){
        for(j=i+1;j<N+1;j++){
            console.log(A.slice(i, j));
        }
    }
  }