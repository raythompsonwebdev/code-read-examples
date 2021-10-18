function funcOne(arr){
    let countObj = {};
    arr.forEach(function(element){
       if(countObj[element]){
         countObj[element] = countObj[element] + 1;      
       }else{
         countObj[element] = 1;  
       }
        
    });
    return countObj;
    
}

console.log(funcOne([2,2,3,6,7,7,7,7,8,9])); //returns Object {2: 2, 3: 1, 6: 1, 7: 4, 8: 1, 9: 1}