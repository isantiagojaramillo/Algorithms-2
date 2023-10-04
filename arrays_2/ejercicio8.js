vector1=[1,2,3,4,5,6,7,8,9];
vector2=[15,14,13,12,11,10,9,8,7,6,5];
array=[];

for(let i=0; i<vector2.length; i++){

    for(let j=0; j<vector1.length; j++){
        if(vector2[i]===vector1[j]){
            array.push(vector1[j])
            array.sort()
        }
    }
}
console.log(array)