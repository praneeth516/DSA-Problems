function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
      var n=+input[line];
      line++;
      var arr=input[line];
      line++;
      //console.log(n);
      //console.log(arr);
      encryption(arr)
    }
    function encryption(str)
    {
        var bag="";
        for(var i=0;i<str.length;i++)
        {
            let count=1;
            while(i<n-1&&str[i]===str[i+1])
            {
                count++;
                i++;
            }
            bag+=(str[i]+count);
        }
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