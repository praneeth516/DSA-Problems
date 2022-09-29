function runProgram(input){
    input=input.split("\n");
    var queue=[];
    for(var i=0;i<input.length;i++){
        var arr=input[i].split(" ");
        if(arr[0]=="E")
        {
            queue.push(arr[1]);
            console.log(queue.length);
        }
        else if(arr[0]=="D")
        {
            if(queue.length!==0)
            {
                var elem=queue[0];
                queue.shift();
                console.log(elem+" "+queue.length);
            }
            else
            {
                console.log("-1"+" "+queue.length);
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