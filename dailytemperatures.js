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
       next_greater(arr,n)
    }
    function next_greater(arr,n)
    {
      var bag="";
      var next_high=Array(n).fill(0);
      var s=[];
      for (var i=0;i<n;i++) 
      {
        while (s.length!==0&&arr[s[s.length-1]]<arr[i]) {
 
            next_high[s[s.length-1]]=i-s[s.length-1];
            s.pop();
        }
        s.push(i);
    }
    for(var j=0;j<n;j++) 
    {
        bag=bag+(next_high[j]+" ");
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