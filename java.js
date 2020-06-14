let score = 0;
let currQuestion =0;




// List of Questions
let questions = [{
    "question": "When was Nigeria formed ?",
    "option1": " 1963",
    "option2": "1915",
    "option3": "1960",
    "option4": "1914",
    "answer": "4",
  },
                          {
    "question": "What is centenary  ?",
    "option1": " 100 year",
    "option2": "10 years",
    "option3": "1000 years",
    "option4": "None of the above",
    "answer": "1",
},
                 {
      "question": "Who designed the Nigeria flag?",
      "option1": "Taribo West",
      "option2": "Fela Kuti",
      "option3": "Michael Taiwo Akinunmi",
      "option4": "None of the above",
      "answer": "3",
  },
                 {
      "question": "Who formed the first political party in Nigeria ?",
      "option1": " Herbert Macauly",
      "option2": "Lord Lugard",
      "option3": "Abubakar Tafawa Balewa",
      "option4": "Nnamdi Azikiwe",
      "answer": "1",
  },{
      "question": "What is centenary  ?",
      "option1": " 100 year",
      "option2": "10 years",
      "option3": "1000 years",
      "option4": "None of the above",
      "answer": "1",
  },
                 {
    "question": "Which country won the 2018 world cup  ?",
    "option1": " Belguim",
    "option2": "Chile",
    "option3": "France",
    "option4": "Spain",
    "answer": "3",
},
                 {
    "question": "The first general election was hold in  ?",
    "option1": " 1957",
    "option2": "1959",
    "option3": "1965",
    "option4": "1949",
    "answer": "2",
},
        {
      "question": "Who formed the first political party in Nigeria ?",
      "option1": " Herbert Macauly",
      "option2": "Lord Lugard",
      "option3": "Abubakar Tafawa Balewa",
      "option4": "Nnamdi Azikiwe",
      "answer": "1",
  },               
                 {
    "question": "What is centenary  ?",
    "option1": " 100 year",
    "option2": "10 years",
    "option3": "1000 years",
    "option4": "None of the above",
    "answer": "1",
}
  ];


  questions.sort(function(a, b){
      
      return 0.5 -Math.random()});
      console.log(questions);



const totQuestion = questions.length;

const container=document.getElementById("quizcontainer");

const start = document.getElementById("start");

const question = document.getElementById("question");

const opt1=document.getElementById("opt1");

const opt2=document.getElementById("opt2");

const opt3=document.getElementById("opt3");

const opt4=document.getElementById("opt4");

var nextbutton = document.getElementById("nextbutton");

const result = document.getElementById("result");

const res = document.getElementById("res");

const progresstext = document.getElementById("progressText");

const progressbar = document.getElementById("progressBar");

const progressbarfull = document.getElementById("progressBarFull");

const highscores = document.getElementById ("highScoresList");

let highscore = highscores;

let highScoreList = score;





function loadQuestion(questionIndex) {
    
    let q = questions[questionIndex];
    question.innerHTML = q.question;
    opt1.innerHTML = q.option1;
    opt2.innerHTML = q.option2;
    opt3.innerHTML = q.option3;
    opt4.innerHTML = q.option4;
};

loadQuestion(currQuestion);

function loadNextQuestion () {
    let selectedOption =document.querySelector("input[type=radio]:checked");
    if (!selectedOption){
        
        alert("Choose an answer !");
        return;
    }
    progressbarfull.style.width = `${(currQuestion / totQuestion) * 100}%`;
    let answer = selectedOption.value;
    if(questions[currQuestion].answer == answer){
        score += 2;
    } 
    
    selectedOption.checked =false;
      currQuestion++;
      if(currQuestion == totQuestion -1){
        nextbutton.textContent='finish';
      }
    if(currQuestion ==totQuestion) {
        
        container.style.display ="none";
        result.style.display ='';
        res.style.display = '';
        result.textContent = score;
        return;
    }
    loadQuestion(currQuestion);
}

// function Highscore () {
//     if (typeof(Storage)!=="undefined"){
//          score = false;
//          if (localStorage["highScoresList"]) {
//              highscore.style.display = "block";
//              highscore.innerHTML = '';
//          }
//     } else {
//         highscore.style.display ="none";
//     }
// }



var sec =60;

var time =setInterval(myTimer, 2000);
function myTimer () {
    document.getElementById('counter').innerHTML = sec;
      sec--;
      if (sec == -1) {
          clearInterval(time);
          container.style.display ="none";
          result.style.display ='';
          res.style.display = '';
          result.textContent = score; 
      }
    
}




