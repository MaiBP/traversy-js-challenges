function removeDuplicates(arr) {
const uniqueArr = []

for (let i = 0; i < arr.length; i++){ 
 if(!uniqueArr.includes(arr[i])){ //loop and check if is not unique, check if includes the character at the certain point and if not
    uniqueArr.push(arr[i]) // push that to the uniqueArr. 
 }
}
return uniqueArr;
}

// SOLUTION 2
// -- The "Set" data structure that doesn contain duplicates so we can just set the array but wrap it in an array structure.
// function removeDuplicates (arr){
//     return Array.from(new Set(arr))  
// }

module.exports = removeDuplicates;
