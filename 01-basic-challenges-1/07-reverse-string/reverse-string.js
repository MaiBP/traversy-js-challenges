// function reverseString(str) {
// return str.split('').reverse().join('')

// }

function reverseString(str){
    let reversed = ''

     for (let i = str.length - 1; i>= 0; i--){ // set i to the str length -1 to loop backwards (takes the sring and reads it from the last letter to the first one )
    //    console.log(str[i])
       reversed += str[i] //append the characters. 
     }
     return reversed;
};

module.exports = reverseString;
