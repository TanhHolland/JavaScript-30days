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
let posPage = 0;
let score = 0;
function DisplayQuestions(index) {
    // Remove question
    listDisplay.innerHTML = "";
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
        choice.addEventListener("click", () => CheckAnswers(i, index));
        listDisplay.appendChild(choice);
    }
}
function DisplayScore() {
    listDisplay.innerHTML = "";
    let item = document.createElement("h3");
    item.innerHTML = `Your score ${score} / ${data.length}`;
    listDisplay.appendChild(item);
}
function CheckAnswers(selectUserIndex, selectCurrentPage) {
    let allAnswers = document.querySelectorAll(".choice");
    allAnswers.forEach((item) => {
        item.style.pointerEvents = "none";
    });

    let indexCorrect = data[selectCurrentPage].answers.findIndex((item) => {
        return item.correct === true;
    });
    if (selectUserIndex === indexCorrect) {
        allAnswers[selectUserIndex].style.backgroundColor = "green";
        score++;
    } else {
        allAnswers[selectUserIndex].style.backgroundColor = "red";
        allAnswers[indexCorrect].style.backgroundColor = "green";
    }
}
function DirectionPage() {
    DisplayQuestions(posPage);
    left.addEventListener("click", (e) => {
        if (posPage === 0) return;
        posPage -= 1;
        DisplayQuestions(posPage);
    });
    next.addEventListener("click", (e) => {
        if (posPage === data.length - 1) {
            DisplayScore();
        } else {
            posPage += 1;
            DisplayQuestions(posPage);
        }
    });
}
DirectionPage();
