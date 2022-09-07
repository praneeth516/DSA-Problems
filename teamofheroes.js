function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
      var [n,k]=input[line].trim().split(" ").map(Number);
      line++;
      var arr=input[line].trim().split(" ").map(Number);
      line++;
      sumofjerseys(arr,k)
    }
    function sumofjerseys(arr,k)
    {
        var yes=0,no=0;
        for(var i=0;i<arr.length;i++)
        {
            for(var j=i+1;j<arr.length;j++)
            {
                if(arr[i]+arr[j]===k)
                {
                    yes++;
                }
                else
                {
                    no++;
                }
            }
        }
        if(yes>0)
        {
            console.log("Yes");
        }
        else
        {
            console.log("No");
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