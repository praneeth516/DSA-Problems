function runProgram(input){
    input=input.trim().split("\n")
    var s1=input[0].trim();
    var s2=input[1].trim();
    function substring(string) {
     var bag=[];

     for(var i=0;i<string.length;i++)
     {
      for(var j=i+1;j<string.length+1;j++)
      {
         bag.push(string.slice(i, j));
     }
 }
  return bag;
}
var substrings=(substring(s1));
//console.log(substrings);
var count1=0,count2=0;
for(var i=0;i<substrings.length;i++)
{
    if(substrings[i]===s2)
    {
        count1++;
    }
    else
    {
        count2++;
    }
}
if(count1>0)
{
    console.log("Yes");
}
else
{
    console.log("No");
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