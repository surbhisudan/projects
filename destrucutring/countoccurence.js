function countOccurrences(str) {
    const words = str.split(' ');
    const counts = new Map();
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      counts.has(word) ? counts.set(word, counts.get(word) + 1) : counts.set(word, 1);
    }
    return counts;
  }
  
  const text = "You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string";
  console.log(countOccurrences(text));
 