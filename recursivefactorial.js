function runProgram(input){
    input=input.trim().split("\n")
    var n=+input[0];
    var res=factrecur(n)
    function factrecur(n)
    {
        if(n===0){
            return 1;
        }
        else
        {
            return n*factrecur(n-1);
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