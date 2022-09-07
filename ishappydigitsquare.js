function runProgram(input){
    input=input.trim().split("\n")
   var n=+input[0];
   for(var i=1;i<=n;i++)
   {
    var num=+input[i];
    if(ishappy(num))
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
   }
   function digitsquare(n)
{
    let square=0;
    while(n>0)
    {
        var digit=n%10;
        square+=digit*digit;
        n=Math.floor(n/10);
    }
         
    return square;
}
function ishappy(n)
{
    let s=[];
    s.push(n);
    while(true)
    {
        if(n==1)
            return true;
        n=digitsquare(n)
        if(s.includes(n))
            return false
        s.push(n)
    }
    return false;
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