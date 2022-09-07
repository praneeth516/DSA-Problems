function runProgram(input){
    input=input.trim().split("\n")
    var[n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    function iterativesearch(arr,n,k)
    {
        var start=0,end=n-1;
        while(start<=end)
        {
            var mid=Math.floor((start+end)/2);
            if(arr[mid]===k)
            {
                return 1;
            }
            else if(arr[mid]<k)
            {
                start=mid+1;
            }
            else
            {
                end=mid-1;
            }
            return -1;
        }
    }
    var res=iterativesearch(arr,n,k)
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