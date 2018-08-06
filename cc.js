// function Question (questionAsked,answers,correctAnswer){
//   this.questionAsked=questionAsked;
//   this.answers=answers;
//   this.correctAnswer=correctAnswer;
// }
//
// // var answers1={
// //   0: 'flat',
// //   1:'round',
// //   2:'ellipe'
// // }
// var q1= new Question('what is the shape of earth?',['flat','round','ellipsoid'],2);
// var q2= new Question('what is the color of an orange?',['orange','blue','green'],0);
// var q3= new Question('what is the coolest language?',['telugu','tamil','malayalam'],0);
//
// var questions=[q1,q2,q3];
//
// var n=Math.floor(Math.random()*questions.length);
//
//  Question.prototype.displayQuestion=function(){
//   console.log(this.questionAsked);
//   for (var i=0;i<this.answers.length;i++){
//     console.log(i +': '+ this.answers[i]);
//   }
// }
//
// var answer=parseInt(prompt('pick the correct answer'));
// Question.prototype.checkAnswer=function(ans){
//   if(ans===this.correctAnswer){
//     console.log('correct Answer!');
//   }else{
//     console.log('Wrong answer, try again!');
//   }
// }
// //below statement=random statement and then displayQuestion method
// questions[n].displayQuestion();
// questions[n].checkAnswer(answer);
















//question function constructor
function Question(question,answers,correctAnswer){
  this.question=question;
  this.answers=answers;
  this.correctAnswer=correctAnswer;
}

var q1=new Question('who is the Prime Minister of India?',['Narendra Modi','Rahul Gandhi','Chandra Babu Naidu'],0);
var q2=new Question('who owns amazon.com?',['Jeff Bazos','Juff Bazinga','Jeff Bezos'],2);
var q3=new Question('which company produces the iPhone?',['Nokia','Apple','SamSung'],1);
var questions=[q1,q2,q3];

var n=Math.floor(Math.random()*questions.length);
Question.prototype.displayQuestion=function(){
  console.log(this.question);
  for(var i=0;i<this.answers.length;i++){
    console.log(i+ ' : '+this.answers[i]);
  }
}

var inputAns=parseInt(prompt('pick the correct answer'));
Question.prototype.checkAnswer=function(ans){
    if(ans=this.correctAnswer){
      console.log('Correct Answer!');
    }else{
      console.log('Wrong Answer,Try again. :)');
    }
}

questions[n].displayQuestion();
questions[n].checkAnswer(inputAns);















//
