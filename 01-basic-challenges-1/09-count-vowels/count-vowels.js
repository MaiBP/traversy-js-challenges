function countVowels(str) {

    const formattedStr = str.toLowerCase(); //set up to lowercase 
    let count = 0; //start from cero

    for ( let i = 0; i < formattedStr.length; i++){ //loop though the string
        const char = formattedStr[i];  // set the character to the index character

        if ( //check if is a vowel and count them
            char ==='a' ||
            char ==='e' ||
            char ==='i' ||
            char ==='o' ||
            char ==='u'
        ){
            count++;
        }
    }

    return count;

}

module.exports = countVowels;
