function titleCase(str) {
  const words = str.toLowerCase().split(" "); //split the words to separate

  for (let i = 0; i < words.length; i++) {
    //loop through
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); //words at index 0 transform to uppercase and add the other letters cutting out the first one.
  }
  return words.join(" "); // return words with a join separate by space so it gets all the phrase in one string.
}

module.exports = titleCase;
