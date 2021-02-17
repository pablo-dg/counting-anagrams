'use strict';

function CountingAnagrams(str) {
  let counter = 0;

  const anagramCount = {};

  const word = str.split(' ');

  const wordUnique = Array.from(new Set(word));

  wordUnique.forEach((word) => {
    let key = word.split('').sort().join('');

    if (key in anagramCount) {
      counter += 1;
    } else {
      anagramCount[key] = true;
    }
  });

  return counter;
}

console.log('cars are very cool so are arcs and my os', CountingAnagrams('cars are very cool so are arcs and my os'));
