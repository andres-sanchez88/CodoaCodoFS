let quizList = []
let renderQuizList = []
let correctAnswerCount = 0
let falseAnswerCount = 0
let totalAnswerCount = 0
let languageSelector = ""
let indexAnswer = 0


function loadQuiz(languageName) {
    let url = `https://quizapi.io/api/v1/questions?apiKey=GPJpMA7kg2ehRS5BDOmNoBJGkpz1EWunc0WeEyyN&difficulty=Easy&limit=1&tags=${languageName}`;
    languageSelector = languageName
    getQuizList(url, languageName)
}

function gateQuiz(languageSelector) {
    if (totalAnswerCount == 5) {
        alert("Finalizaste el test ¡Clickea en Aceptar para ver como te fue!");
        reviewQuiz();
    } else {
        loadQuiz(languageSelector)
    }
}

function reviewQuiz() {
    if (correctAnswerCount > falseAnswerCount) {
        alert("Aprobaste!");
    } else {
        alert("A seguir estudiando!");
    }
}

function renderQuiz(quizListToRender) {    
    quizTarget.innerHTML = ""
    quizListToRender.forEach((quiz) => {
        const articleQuiz = document.createElement("article")
        let quizAnswers = Object.values({...quiz.answers})
        let validAnswers = Object.values({...quiz.correct_answers})
        articleQuiz.innerHTML = `
                    <h3>${quiz.question}</h3>
                    <select name="answerSelect" class="form-select form-select" id="answerSelector">  
                    </select>
                    <button id="buttonDefinitiveAnswer">
                    Submit
                </button>
                    `     
        quizTarget.append(articleQuiz) 
        const buttonDefinitiveAnswer = document.querySelector("#buttonDefinitiveAnswer")
        const answerSelectorData = document.querySelector("#answerSelector")
        quizAnswers = quizAnswers.filter((obj) => {
            return obj !== null
        })
        quizAnswers.forEach((validOption) => {
            answerSelectorData.innerHTML += 
            `
            <option value="${validAnswers[indexAnswer]}">${validOption}</option>
            `
            indexAnswer++
        })
        indexAnswer = 0

        buttonDefinitiveAnswer.addEventListener("click",(eventData) => {
            eventData.preventDefault()
            if (answerSelectorData.options[answerSelectorData.selectedIndex].value == "true") {
                correctAnswerCount++;
                totalAnswerCount++;
                gateQuiz(languageSelector)
            } else {
                falseAnswerCount++;
                totalAnswerCount++;
                gateQuiz(languageSelector)
            }
        })
        
    });
/*     console.log(correctAnswerCount)
    console.log(falseAnswerCount) */
}


async function getQuizList(url, languageName) {
    const respose = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
    quizList = await respose.json()
    quizlist = {...quizList}
    //CARGO LOS DATOS ASINCRONICOS A LOCALSTORAGE PARA FACILITAR EL ACCESO A LA INFORMACION
    renderQuiz(quizList)
}


const quizButtonSelectorLinux = document.querySelector("#quizButtonSelectorLinux")
const quizButtonSelectorBash = document.querySelector("#quizButtonSelectorBash")
const quizButtonSelectorDocker = document.querySelector("#quizButtonSelectorDocker")
const quizTarget = document.querySelector("#quizTarget") //selector


quizButtonSelectorLinux.addEventListener("click", () => {
    loadQuiz("linux")
})
quizButtonSelectorBash.addEventListener("click", () => {
    loadQuiz("BASH")
})
quizButtonSelectorDocker.addEventListener("click",  () => {
    loadQuiz("Docker")
})