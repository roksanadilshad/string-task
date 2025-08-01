const text = "amar sonar bangla";
const matches = text.match(/a/gi);
const count = matches ? matches.length : 0;

console.log(count);