function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
        var str=input[line].trim().split("");
        line++;
       var result=balanceornot(str)
       if(result)
       {
           console.log("balanced");
       }
       else
       {
           console.log("not balanced");
       }
    }
}
function balanceornot(str)
{
var stack=[];
for(var i=0;i<str.length;i++)
{
    var res=str[i]
    if(res== "(" ||res== "{" ||res== "[")
    {
        stack.push(res)
        continue;
    }
     if (stack.length===0)
            return false;
        var out;
        switch(res)
        {
        case ')':
            out=stack.pop();
            if (out=='{'||out=='[')
                return false;
            break;
        case '}':
            out=stack.pop();
            if (out=='('||out=='[')
                return false;
            break;
        case ']':
            out= stack.pop();
            if (out=='('||out=='{')
                return false;
            break;
}
}
return (stack.length===0)
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