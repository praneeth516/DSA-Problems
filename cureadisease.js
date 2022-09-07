function runProgram(input){
    input=input.trim().split("\n")
    var n=+input[0];
    var strengths=input[1].trim().split(" ").map(Number);
    var midchlorines=input[2].trim().split(" ").map(Number);
    //console.log(n);
    //console.log(strengths);
    //console.log(midchlorines);
    vaccine(strengths,midchlorines)
    function vaccine(a,b)
    {
        var count1=0,count2=0;
        for(var i=0;i<a.length;i++)
        {
            for(var j=0;j<a.length;j++)
            {
                if(b[j]>a[i])
                {
                    count1++;
                }
                else
                {
                    count2++;
                }
            }
        }
        if(count1>0)
                {
                    console.log("No");
                }
                else
                {
                    console.log("Yes")
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