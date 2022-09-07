function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0]
    var bag="";
    for(var i=1;i<=t;i++)
    {
        var [x,y]=input[i].trim().split(" ").map(Number);
        var res=gcdrecur(x,y);
    }
    function gcdrecur(x,y)
    {
        if(y===0)
        {
            console.log(x);
        }
        else
        {
            var bag=bag+gcdrecur(y,x%y);
        }
        return bag;
    }
    //console.log(res.slice(0,-1));

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