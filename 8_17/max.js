var num = [12,34,25,34];
var sum = 0;

for(i in num){
    if(sum < num[i] ){
        sum = num[i];
    }    
}

console.log(sum);