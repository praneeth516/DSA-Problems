function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
      var n=+input[line];
      line++;
      var arr=input[line].trim().split(" ").map(Number);
      line++;
      removedup(arr)
    }
    function removedup(arr)
    {
        var count=0;
        var bag="";
        let unique=[...new Set(arr)];
        for(var i=0;i<unique.length;i++)
        {
            bag+=unique[i]+" ";
            count++;
        }
        console.log(count);
        console.log(bag);
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