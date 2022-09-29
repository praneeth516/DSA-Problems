function runProgram(input){
    input=input.trim().split("\n");
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
        var str=input[line].trim().split("");
        line++
        var result=removebeforehash(str);
        console.log(result.join(""));
    }
}
function removebeforehash(s) {
    var str=[];

for(var i=0;i<s.length;i++){
    if(s[i]=="#"){
        str.pop(s[i-1]);
    }
    else{
        str.push(s[i])
    }
}
return str;
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