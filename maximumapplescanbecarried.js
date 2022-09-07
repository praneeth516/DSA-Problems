function runProgram(input){
    input=input.trim().split("\n")
    var count=0;
    var bag=0;
   var [n,w]=input[0].trim().split(" ").map(Number);
   var arr=input[1].trim().split(" ").map(Number);
   arr.sort(function(a, b){return a-b});
   for(var i=0;i<arr.length;i++)
   {
           bag+=arr[i];
           if(bag<=w)
           {
               count++;
           }
           //console.log(bag);
    }
   console.log(count);
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