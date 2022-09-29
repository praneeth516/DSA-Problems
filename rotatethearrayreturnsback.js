function runProgram(input){
    input=input.trim().split("\n")
    var t=+input[0];
    var line=1;
    for(var i=0;i<t;i++)
    {
      var [n,k]=input[line].trim().split(" ").map(Number);
      line++;
      var arr=input[line].trim().split(" ").map(Number);
      line++;
      rotate(arr,n,k)
    }
    function rotate(a,n,k)
    {
    k=k%n;
    var bag="";
    for (var i=0;i<n;i++) 
    {
        if(i<k) 
        {
            bag+=(a[n +i-k]+ " ");
        }
        else 
        {    
            bag+=((a[i-k])+ " ");
        }
    }
    console.log(bag);
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