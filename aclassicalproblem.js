function runProgram(input){
    input=input.trim().split("\n")
    var n=+input[0];
    classicalproblem(n)
    function classicalproblem(n)
    {
        for(var i=1;i<=n;i++)
        {
            if(i%5===0&&i%7===0)
            {
                console.log("MasaiSchool");
            }
            else if(i%5===0)
            {
                console.log("Masai");
            }
            else if(i%7===0)
            {
                console.log("School");
            }
            else
            {
                console.log(i);
            }
        }
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