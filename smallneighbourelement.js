function runProgram(input)
{
    input=input.trim().split('\n')
    var t=+input[0];
    var a=input[1].trim().split(' ').map(Number);
    var length=a.length;
    neighboursmall(length,a)
}
function neighboursmall(length,a){
    var stack=[];
    var res=[];
    for(var i=0;i<length;i++)
    {
     while(stack.length!==0&&stack[stack.length-1]>=a[i])
     {
         stack.pop();
     }
     if(stack.length===0)
     {
         res.push(-1);
     }
     else
     {
         res.push(stack[stack.length-1])
     }
        stack.push(a[i]);
    }
    console.log(res.join(' '))
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