var readlineSync = require('readline-sync');
import  "chalk";
var userName = readlineSync.question("What is your name ?");
console.log("Welcome, "+userName+" how well do you know Akash?");

var score = 0;

//play function
function play(question ,  answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log(chalk.green("Right Answer!!!"));
    score = score + 10;
    console.log("Your Score is "+score);
  }
  else{
    console.log(chalk.red("Wrong Answer!!!"));
    score = score - 5;
    console.log("Your Score is "+score);
  }

  
  console.log("--------------");
}

var questionAnswer = [
  {
  question: "Where do I live?",
  answer: "Durgapur",
},
  {
 question: "What is my age ?",
  answer: "22",
},
  {
  question: "What is my favourite sport ?",
  answer: "Football",
  
}];

for(var i=0;i<questionAnswer.length;i++){
  play(questionAnswer[i].question , questionAnswer[i].answer);
}

