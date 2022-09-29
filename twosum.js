function twosum(n ,k ,arr){
    var left=0;
    var right=n-1;
    var count=0;
    while(left<right){
        if((arr[left]+arr[right]) == k){
            console.log(left,right);
            count++;
            break;
        }
        else if((arr[left]+arr[right]) >k){
            right--;
        }
        else{
            left++;
        }
    }
    if(count ===0){
        console.log("-1 -1");
    }
}