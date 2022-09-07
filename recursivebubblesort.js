function runProgram(input){
    input=input.trim().split("\n")
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    function recursivebubb(arr,n)
    {
        var bag="";
        if(n===1)
        {
            return;
        }
            for(var i=0;i<n-1;i++)
            {
                 for (j=0;j<n-i-1;j++)
                 {
                  if(arr[j]>arr[j+1])
                   {
                     var temp=arr[j];
                     arr[j]=arr[j+1];
                     arr[j+1]=temp;
                   }
            }
        }
        for(var k=0;k<arr.length;k++)
        {
            bag+=arr[k]+" ";
        }
     console.log(bag);
    }
    recursivebubb(arr,n)
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