function runProgram(input){
    input=input.trim().split("\n")
    var [a,b]=input[0].trim().split(" ").map(Number);
    var res=recurpower(a,b)
    function recurpower(a,b)
    {
        if(a===0)
        {
            return 0;
        }
        else if(b===0)
        {
            return 1;
        }
        else
        {
            return a*recurpower(a,b-1);
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