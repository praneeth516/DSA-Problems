function runProgram(input){
    input=input.trim().split("\n")
     var t=+input[0];
     var line=1;
     for(var i=0;i<t;i++)
     {
         var n=+input[line];
         line++;
         var str=input[line];
         line++;
         distinctsubstring(n,str);
     } 
     function distinctsubstring(n,str)
     {
         let res=new Set();
         for(var i=0;i<=str.length;i++)
         {
             for(var j=i+1;j<=str.length;j++)
             {
                 res.add(str.substring(i,j));
             }
         }
        console.log(res.size);
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