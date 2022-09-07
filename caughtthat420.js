function runProgram(input){
    input=input.trim().split("\n")
    var str=input[0];
    //console.log(str);
    var res=str.indexOf('420');
    if(res>-1)
    {
        console.log("Caught");
    }
    else
    {
        console.log("Escaped");
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