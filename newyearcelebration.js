function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
        var [S,M]=input[line].trim().split(" ")
       line++;
       add(S,M)
    }
}
     var que=[];
    var stack=[];
    function add(S,M)
    {
        if(S==1)
        {
            que.push(M)
        }
       else if(S==2)
       {
           stack.push(M)
       }
       else if(S==3)
       {
         if(que.length===0)
         {
            console.log("-1")
         }
         else
         {
             console.log(que[0]) 
         }
       }
       else if(S==4)
       {
          if(stack.length!==0)
       {
           console.log(stack[stack.length-1])
       }
       else
       {
           console.log("-1")
       }
       }
       else if(S==5)
       {   
             stack.push(que[0]);
             que.shift();
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