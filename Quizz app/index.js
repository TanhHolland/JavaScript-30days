const data = [
    {
        question: "1 + 1 = ?",
        answers: [
            {
                text: "5",
                correct: false,
            },
            {
                text: "3",
                correct: false,
            },
            {
                text: "4",
                correct: false,
            },
            {
                text: "2",
                correct: true,
            },
        ],
    },
    {
        question: "What is capital Viet Nam?",
        answers: [
            {
                text: "BangKok",
                correct: false,
            },
            {
                text: "New York",
                correct: false,
            },
            {
                text: "Ha Noi",
                correct: true,
            },
            {
                text: "Japan",
                correct: false,
            },
        ],
    },
];
const listDisplay = document.querySelector(".list");
const next = document.querySelector(".next");
const left = document.querySelector(".left");
let isDone = false;
let posPage = 0;
function DisplayQuestions(index) {
    // Title question
    let ques = document.createElement("h3");
    ques.className = "question";
    ques.innerHTML = "Question " + (index + 1) + ": " + data[index].question;
    listDisplay.appendChild(ques);
    // Choice
    for (let i = 0; i < 4; i++) {
        let choice = document.createElement("h4");
        choice.className = "choice";
        choice.innerHTML = data[index].answers[i].text;
        listDisplay.appendChild(choice);
    }
    CheckAnswers(index);
}
function RemoveQuestions() {
    listDisplay.innerHTML = '';
    console.log('remove');
}
function CheckAnswers(index) {
    let choicesDisplay = listDisplay.children;
    console.log(choicesDisplay);
    for(let i = 1; i < choicesDisplay.length; i++) {
        choicesDisplay[i].addEventListener('click',(e) => {
            
        })
    }
    listDisplay.addEventListener("click", (e) => {
        if (e.target.className !== "choice" || isDone) return;
        let answerByUser = e.target.innerText;
        let choices = data[index].answers;
        let choicesDisplay = listDisplay.children;
        let posAnswerTrue, posAnswerUser;
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].correct) {
                posAnswerTrue = i;
            }
            if (choices[i].text === answerByUser) {
                posAnswerUser = i;
            }
        }
        if (posAnswerTrue === posAnswerUser) {
            choicesDisplay[posAnswerTrue + 1].style.backgroundColor = "green";
        } else {
            choicesDisplay[posAnswerTrue + 1].style.backgroundColor = "green";
            choicesDisplay[posAnswerUser + 1].style.backgroundColor = "red";
        }
        console.log(choicesDisplay[posAnswerTrue + 1]);
        console.log(choicesDisplay[posAnswerUser + 1]);
        isDone = true;
    });
}
function DirectionPage() {
    DisplayQuestions(posPage);
    left.addEventListener("click", (e) => {
        if (posPage === 0) return;
        RemoveQuestions();
        posPage -= 1;
        isDone = false;
        DisplayQuestions(posPage);
    });
    next.addEventListener("click", (e) => {
        if (posPage == data.length) return;
        RemoveQuestions();
        posPage += 1;
        isDone = false;
        DisplayQuestions(posPage);
    });
}
DirectionPage();
