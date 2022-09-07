function runProgram(input){
    input=input.trim().split("\n")
    var arr=input[0].trim().split(" ").map(Number);
    bubblesort(arr)
    function bubblesort(arr)
    {
      let len=arr.length;
      let sorted;
      do{
          sorted=false;
          for (let i=0;i<len;i++) {
              if (arr[i]>arr[i+1]){
                  let temp=arr[i];
                  arr[i]=arr[i+1];
                  arr[i+1]=temp;
                  sorted=true;
              }
          }
      }while(sorted);
      return arr;
    }
    //console.log(arr);
    for(var j=0;j<arr.length;j++)
    {
        if(arr[j+1]-arr[j]>1)
        {
            var missing_ele=arr[j]+1;
            console.log(missing_ele);
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