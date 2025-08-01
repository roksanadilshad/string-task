const text = "Amar sonar banglA Ami tumay vAlobeshechi".toLowerCase();
 
const hasA = text.includes('a');
const hasE = text.includes('e');
const hasI = text.includes('i');
const hasO = text.includes('o');
const hasU = text.includes('u');

if(hasA && hasE && hasI && hasO && hasU){
    console.log("All vowels are present")
}
else{
    console.log("Not all vowels are present")
}