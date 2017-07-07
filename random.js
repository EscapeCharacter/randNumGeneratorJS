var userInput = prompt('Please enter a number');
var numCeiling = parseInt(userInput);
var randNum = Math.floor(Math.random() * numCeiling) + 1;
var message = '<p>' + randNum + ' is a number between 1 and ' + numCeiling + '.</p>';
document.write(message);