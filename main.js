function decline(){
    alert("Question Declined");
}

let questions = [
   "what is your name",
   "are you a programmer",
   "how old are you",
   "how many languages do you know",
   "are you an engineer",
   "what is your profession",
   "what is your age"
]

function accept(){
   let question = document.querySelector("#txt").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Question is accepted");
   else window.alert("Question is Decline");
}