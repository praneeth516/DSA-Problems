function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
        var str=input[line++];
        uniquegift(str)
    }
}

function uniquegift(str){
    var obj={
        "a":0,
        "b":0,
        "c":0,
        "d":0,
        "e":0,
        "f":0,
        "g":0,
        "h":0,
        "i":0,
        "j":0,
        "k":0,
        "l":0,
        "m":0,
        "n":0,
        "o":0,
        "p":0,
        "q":0,
        "r":0,
        "s":0,
        "t":0,
        "u":0,
        "v":0,
        "w":0,
        "x":0,
        "y":0,
        "z":0,
    }
    var queue =[];
    var res="";
    for(var i=0;i<str.length;i++)
    {
        obj[str[i]]++;
        queue.push(str[i]);
        while(queue.length!==0)
        {
            if(obj[queue[0]]===1)
            {
                break;
            }
            queue.shift()
        }
        if(queue.length===0){
            res+="#";
        }else{
            res+=queue[0];
        }
    }
    console.log(res);
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