let str = "hello hello world world";
let arrayUnique = [];
let words = str.match(/\b\w+\b/g);

for (let i = 0; i < words.length; i++) {
  if (words[i] !== " " && !arrayUnique.includes(words[i])) {
    arrayUnique.push(words[i]);
  }
}
console.log(arrayUnique);
