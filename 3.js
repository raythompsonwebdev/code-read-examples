function funcOne(arr){
    return arr.filter((element, index, arrayObj) => arrayObj.indexOf(element) == index );
}
// 
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
console.log(funcOne([2,2,3,6,7,7,7,7,8,9])); //returns [2, 3, 6, 7, 8, 9]