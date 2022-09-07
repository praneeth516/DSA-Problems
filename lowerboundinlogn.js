function runProgram(input){
    input=input.trim().split("\n")
    var [n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    var res=lowerbound(arr,k)
    function lowerbound(arr,k)
    {
        var present=0;
        present=arr.indexOf(k);
        if(present<0)
        {
          return -1;   
        }
        else
        {
            return present;
        }
    }
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