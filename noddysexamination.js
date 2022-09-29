function runProgram(input){
    input=input.trim().split("\n")
    var[n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    noddyexam(arr,n,k)
    function noddyexam(arr,n,k){
      var count=0,c1=0;
      for(var i=0;i<n;i++)
      {
          if (arr[i]<=k)
          {
              count++;
          }
          else
          {
            c1++;
              if(c1==2)
              {
              break;
              }
          }
          
      }
  console.log(count);
 }
}
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }