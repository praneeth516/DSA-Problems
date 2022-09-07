function runProgram(input){
    input=input.trim().split("\n")
   var str=input[0];
   function balancedornot(str)
   {
       var stack=[];
       for(var i=0;i<str.length;i++)
       {
           var x=str[i];
           if(x=='(' || x=='['||x=='{')
           {
               stack.push(x);
               continue;
           }
           if(stack.length===0)
           {
               return false;
           }
           var check;
           switch(x)
           {
               case ')':
               {
                 check=stack.pop();
                  if(check=='{'||check=='[')
                  {
                    return false;
                  }
                  break;
               }
               case '}':
               {
                   check=stack.pop();
                   if(check=='('||check=='[')
                   {
                       return false;
                   }
                   break;
               }
               case ']':
               {
                   check=stack.pop();
                   if(check=='('||check=='{')
                   {
                       return false;
                   }
                   break;
               }
           }
   }
   return(stack.length===0);
   }
    if(balancedornot(str))
   {
       console.log("balanced");
   }
   else
   {
       console.log("unbalanced");
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