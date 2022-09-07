function runProgram(input){
    input=input.trim().split("\n")
   var n=+input[0];
   var arr=input[1].trim().split(" ").map(Number);
   var socks={},pairs=0;
   for(var i of arr)
   {
       socks[i]=socks[i]+1||1;
       if(socks[i]%2===0)
       {
           pairs+=1;
       }
   }
   console.log(pairs);
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