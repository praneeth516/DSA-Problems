function runProgram(input){
    input=input.trim().split("\n")
   var[r,c]=input[0].split(" ").map(Number);
   var mat=[];
   for(var k=1;k<=r;k++)
   {
       mat.push(input[k].split(" ").map(Number));
   }
   var bag="";
   for(var i=0;i<c;i++)
   {
       var j=0,min=Infinity;
       while(j<r)
       {
           if(mat[j][i]<min)
           {
               min=mat[j][i];
           }
           j++;
       }
       bag+=min+" "
   }
   console.log(bag);
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