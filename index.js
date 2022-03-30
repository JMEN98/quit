const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



const questions =[

{
  question : 'what is my name',
   answers:[
    
    {text: "Paul", correct: false},
    {text:"Jeff", correct:true},
    {text: "steve",correct:false}
   ]
},

{
  question : 'is coding cool',
   answers:[
    {text:"yes", correct:true},
    {text: "no", correct: false},
   
   ]
},
{
  question : '2+2',
   answers:[
    {text:"5", correct:false},
    {text: "4", correct: true},
    {text: "9",correct:false},
    {text:"10",correct: false}
   ]
},

{
  question : 'is lebron james good',
   answers:[
    {text:"No", correct:true},
    {text: "Yes", correct: false},
    
   ]
},

{
  question : '5*5',
   answers:[
    {text:"3", correct:false},
    {text: "145", correct: false},
    {text:"55", correct:false},
    {text:"23",correct:false},
    {text:"25",correct:true}
    
   ]
},
{
  question : 'is python the bes ',
   answers:[
    {text:"No", correct:true},
    {text: "Yes", correct: true},
    
   ]
},
{
  question : 'is Allen iverson  good',
   answers:[
    {text:"No", correct:false},
    {text: "Yes", correct: true},
    
   ]
},
{
  question : 'is github good to use ',
   answers:[
    {text:"Yes", correct:true},
    {text: "no", correct: false},
    {text:"maybe",correct:false}
    
   ]
}
]