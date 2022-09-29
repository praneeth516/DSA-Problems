function runProgram(input){
    input=input.trim().split("\n");
    var t=+(input[0]);
    var arr=[];
     for(var i=1;i<=t;i++)
     {
            var temp=input[i].trim().split(" ").map(Number);
            arr.push(temp);
     }
     pushpopandtop(arr,t);
  }
  
  function pushpopandtop(arr,N){
      var stack=[];
    for(var i=0;i<N;i++)
    {
        if(arr[i].length>1)
        {
           stack.push(arr[i][1]); 
        }
        else
        {
            if(arr[i]==2)
            {
                stack.pop()
            }
            else
            {
                if(stack.length===0)
                {
                    console.log("Empty!")
                }
                else
                {
                    console.log(stack[stack.length-1])
                }
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