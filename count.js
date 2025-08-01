const text = "Amar sonar banglA Ami tomay vAlobashi";
const matches = text.match(/a/gi);
const count = matches ? matches.length : 0;

console.log(count);

// const text = "Amar sonar banglA Ami tomay vAlobashi";
// let count = 0;

// for(const char of text){
//     if(char === 'a' || char === 'A'){
//         count++;
//     }
// }

// console.log(count);