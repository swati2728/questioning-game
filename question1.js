function question_game(){
var score=0;
const prompt= require("prompt-sync")();
var question1 = prompt("How many continents are there? a.four b.nine c.seven d.Eight Answer:");
if(question1=="c" || question1=="seven"){
    score=score+1;
    console.log("correct!!");
	console.log("score:",score);
	console.log(" ");
}else{
	console.log("incorrect!", "answer is seven");
	console.log("score:", score);
	console.log(" ");
}
var question2 = prompt("What is the capital of India? a. chandigarh b. Bhopal c.Chennai d.Delhi Answer:");
if(question2=="d" || question2=="Delhi"){
	score=score+1
	console.log("correct!!");
	console.log("score:",score);
	console.log(" ");
}else{
	console.log("incorrect!","answer is Delhi")
 	console.log("score:" , score)
 	console.log(" ")
}
var question3 = prompt("NG mei kaun se course padhaya jaata hai? a.Software Engineering b.Counseling c.Tourism d. Agriculture Answer:");
if (question3=="a" || question3=="Software Engineering"){
	score=score+1
 	console.log("correct!")
 	console.log("score",score)
 	console.log(" ")
}else{
	console.log("incorrect!","answer is Software Engineering")	
 	console.log("score",score)
 	console.log(" ")	
}	

}
question_game()