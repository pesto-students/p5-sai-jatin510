function isVowel(char) {
  return 'aeiou'.includes(char);
}

function vowelCount(string) {
  string = string.toLowerCase();

  const map = new Map();

  for (let char of string) {
    if (!isVowel(char)) continue;

    if (map.has(char)) {
      const count = map.get(char);
      map.set(char, count + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}

const vowelMap = vowelCount('Hello! I am Jagdish Parihar');

for (const pair of vowelMap) {
  console.log(pair);
}
