function runProgram(input){
    input=input.trim().split("\n")
   var [n,k]=input[0].trim().split(" ").map(Number);
   var arr=input[1].trim().split(" ").map(Number);
   function occurences(arr,k)
   {
       var count=0;
       arr.forEach(ele=>{
           if(ele===k)
           {
               count++;
           }
       })
       return count;
   }
   var res=occurences(arr,k)
   console.log(res);
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