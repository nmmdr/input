const userInput = window.prompt('what is your name?');
const userOutputEl = document.getElementById('output');

console.log(userInput);


console.log(userOutputEl);

userOutputEl.innertext = "hello, " + userInput + "!";




