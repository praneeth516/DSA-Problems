function runProgram(input){
    input=input.trim().split("\n")
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    function swap(arr, left, right){
    var temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
}
function partition(arr, left, right) {
    var pivot =arr[Math.floor((right + left) / 2)], 
        i=left, 
        j=right; 
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right); 
        if (left < index - 1) { 
            quicksort(arr, left, index - 1);
        }
        if (index < right) { 
            quicksort(arr, index, right);
        }
    }
    return arr;
 }
 var finalarr=quicksort(arr,0,n-1)
 var res=arrtostr(arr);
function arrtostr(arr)
{
     var bag="";
    for(var i=arr.length-1;i>=0;i--)
    {
     bag=bag+arr[i]+" ";
    }
        return bag;
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