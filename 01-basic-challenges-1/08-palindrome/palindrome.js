function isPalindrome(str) {
 
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // set up the passed string to take out the special characters
    const reversedStr = formattedStr.split('').reverse().join(''); // set up the new formattedStr split it, reverse it and join. 

    return formattedStr === reversedStr; //compare both to see if true or false. 

}

module.exports = isPalindrome;
