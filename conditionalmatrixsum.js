function runProgram(input){
    input=input.trim().split("\n")
   var[n,m]=input[0].split(" ").map(Number);
   var mat=[];
   for(var k=1;k<=n;k++)
   {
       mat.push(input[k].split(" ").map(Number));
   }
   divisibleby3(mat,n,m)
   function divisibleby3(mat,n,m)
   {
       var bag=0;
       for(var i=0;i<n;i++)
       {
           for(var j=0;j<m;j++)
           {
               if(mat[i][j]%3===0)
               {
                   bag+=mat[i][j];
               }
           }
       }
       console.log(bag);
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