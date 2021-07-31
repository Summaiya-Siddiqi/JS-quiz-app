var quizStartBtn = document.getElementsByClassName('quizStartBtn');
var quizForm = document.getElementsByClassName('quizForm');
var quizBtn = document.getElementById("quizBtn");


var setUserName = document.getElementById("setUserName")
var setEmail = document.getElementById("setEmail")

// On Submit
function onSubmit(){
    var Name = document.getElementById("Name");
    var Email = document.getElementById("Email");
    var Phone = document.getElementById("Phone");
    var Institute= document.getElementById("Institute");
    

    if(Name.innerHTML == "" && Email.innerHTML == "" &&  Phone.innerHTML == "" && Institute.innerHTML == ""){
            quizForm[0].classList.add("hide");
            quizStartBtn[0].classList.remove("hide")
            setUserName.innerText = `Name: ${Name.value}`
            setEmail.innerText = `Email: ${Email.value}`
    }

}


//Questions and options

var quizQuestions = [
    {
        num : 1,
        question : "HTML stand for",
        Option : {
            a : "Hyper text markup Language",
            b : "Hyper text programming Language",
            c : "Hyper text styling Language",
            d : "Hyper text scripting Language",

        },
        answer : "Hyper text markup Language"
    },
    {
        num : 2,
        question : "What does CSS stand for?",
        Option : {       
      a: "Common Style Sheet",
      b: "Colorful Style Sheet",
      c: "Computer Style Sheet",
      d: "Cascading Style Sheet",

        },
        answer : "Cascading Style Sheet"
    },
    {
        num : 3,
        question : "What does XML stand for?",
        Option : {
            a : "eXtensible Markup Language",
            b : "eXecutable Multiple Language",
            c : "eXTra Multi-Program Language",
            d :  "eXamine Multiple Language",

        },
        answer :"eXtensible Markup Language",
    }
    ,
    {
        num : 4,
        question :  "Which type of JavaScript Languages is",
        Option : {
            a : "Object-Oriented ",
            b : "Object-Base",
            c : "Assembly Languages",
            d : "high Level",

        },
        answer :"Object-Base"
    }
    ,
    {
        num : 5,
        question : "Which one of these is a JavaScript package manager?",
        Option : {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
            d : "none",

        },
        answer :"npm"
    },
    {
        num : 6,
        question : "Who invented JavaScript:",
        Option : {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d:"James Charles",

        },
        answer : "Brendan Eich"
    },
    {
        num : 7,
        question : "The correct sequence of HTML tags for starting a webpage is",
        Option : {
            a : "Head, Title, HTML, body",
            b : "HTML, Body, Title, Head",
            c : "HTML, Head, Title, Body",
            d : "HTML, Title , Head,  Body",

        },
        answer : "HTML, Head, Title, Body"
    }
]



var wordingScore = document.getElementById("wordingScore");
var rightCount = document.getElementById("rightCount")
var  wrongCount= document.getElementById("wrongCount")
var resultMainBox = document.getElementById("resultMainBox")



var optionUl = document.getElementsByClassName('optionUl');
var optionLists = document.getElementsByClassName("option");
var QuestBox = document.getElementsByClassName("QuestBox")
var count = 0;
var Quizquestion = document.getElementById('Quizquestion');
var quesNum = document.getElementById("quesNum")
var nextQuest = document.getElementById("nextQuest")
var score = 0;

//Quiz Start Button
quizBtn.onclick = function(){
    quizStartBtn[0].classList.add("hide");
    QuestBox[0].classList.remove("hide");
    quesChange(0)
    queCounter(1)

    nextQuest.style.display = "none"
    for(var i = 0 ; i<optionLists.length ; i++){
        optionLists[i].setAttribute("onclick" , "optionSelected(this)")
    }
    
    //Timer
var count = 50;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML="Time left: "+count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Time over';
    QuestBox[0].classList.add("hide");
    resultMainBox.classList.remove("hide")
    
  }

}, 1000);

}

// Next Question 
 let que_numb = 1
function nextQuestion(){
    count++
    que_numb++;
    if(count < quizQuestions.length){
        quesChange(count)
        queCounter(que_numb);
        
       
        nextQuest.style.display = "none"
    }
    else{
        QuestBox[0].classList.add("hide");

        resultMainBox.classList.remove("hide")
    
    
        
    }

}

function quesChange(index){

    Quizquestion.innerText = quizQuestions[index].question
    optionLists[0].innerHTML = quizQuestions[index].Option.a
    optionLists[1].innerHTML = quizQuestions[index].Option.b
    optionLists[2].innerHTML = quizQuestions[index].Option.c
    optionLists[3].innerHTML = quizQuestions[index].Option.d

    ////REMOVE Options Background/////
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.remove("success")
        optionLists[i].classList.remove("wrong")
    }
    ////REMOVE CLICK disabled  Background/////
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.remove("disabled")
    }
}
//Result Box or Question Check 
const resultBox = document.querySelector(".resultBox");
function optionSelected(answer){
    // console.log(answer.innerHTML)
    if(answer.innerHTML === quizQuestions[count].answer){
        console.log("correct")
        nextQuest.style.display = "block"
        answer.classList.add("success")
        score += 1;
        console.log(score)
      
        const scoreText = resultBox.querySelector(".score_text");
        if (score > 3){ // if user scored more than 3
            //creating a new span tag and passing the user score number and total question number
            let scoreTag = '<span>and congrats! 🎉, You got <p>'+ score +' out of '+ quizQuestions.length +'</p></span>';
            scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
           
        }
        else if(score > 1){ // if user scored more than 1
            let scoreTag = '<span>and nice 😎, You got <p>'+ score +' out of '+ quizQuestions.length +'</p></span>';
            scoreText.innerHTML = scoreTag;
           
        }
        else{ // if user scored less than 1
            let scoreTag = '<span>and sorry 😐, You got only <p>'+score +' out of '+ quizQuestions.length +'</p></span>';
            scoreText.innerHTML = scoreTag;
        }

        

    }
    else{
        console.log("block")
        nextQuest.style.display = "block"
        answer.classList.add("wrong")
      

        for(var i = 0 ; i<optionLists.length ; i++){
            
            if(optionLists[i].innerHTML === quizQuestions[count].answer){
                optionLists[i].classList.add("success")
                // console.log(answer.innerHTML)
            }
        }
    }



    ///User select one option all option is block/////
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.add("disabled")
    }


}

// Question Number
const bottom_ques_counter = document.querySelector(" .total_que");

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'  of '+ quizQuestions.length +' Questions</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


