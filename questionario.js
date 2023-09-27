const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer=document.querySelector(".questions-container")
const $answersContainer=document.querySelector(".answers-container")
const $questionText=document.querySelector(".question")


$startGameButton.addEventListener("click", startGame)

//variavel auxiliar
let currentQuestionIndex = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    //Enquanto a variavel $respostacontainer tiver um filho ele irá remover até que não tenha nenhum filho

    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }
    //pegando a primeira questão e mostrando na tela
    $questionText.textContent = questions[currentQuestionIndex].questions
}







//BANCO DE PERGUNTAS

const questions =[
    {
        //Questão
        questions:" Quanto é 2 + 2 ",
        //Array de resposta
        answers:[
            {text:" 3 ", correct: false },
            {text:" 5 ", correct: false},
            {text:" 4 ", correct: true},
            {text:" 6 ", correct: false}
        ]
    },
    
    {
        //Questão
        questions:" Quanto é 3 x 3 ",
        //Array de resposta
        answers:[
            {text:" 6 ", correct: false},
            {text:" 9 ", correct: true},
            {text:" 12 ", correct: false},
            {text:" 3 ", correct: false}
        ]
    },

    {
        questions:" Quanto é 6 - 1 ",

        answers:[
            {text:" 5 ", correct: true},
            {text:" 4 ", correct: false},
            {text:" 3 ", correct: false},
            {text:" 2 ", correct: false}
        ]
    }

]