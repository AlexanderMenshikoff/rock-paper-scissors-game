const tools = ['rock', 'paper', 'scissors']

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min )

const userAnswer = prompt('Rock, paper or scissors?')

const randomIndex = getRandomNumber(0,2)

const computerAnswer = tools[randomIndex]

const startGame = (userAnswer, computerAnswer) => {
    userAnswer = userAnswer.toLowerCase()
    if(!userAnswer || !tools.includes(userAnswer)){
        return 'Bad answer!'
    }

    let res = ''

    const isDraw = userAnswer === computerAnswer
    const isUserWin = (userAnswer === 'rock' && computerAnswer === 'scissors') || (userAnswer === 'scissors' && computerAnswer === 'paper') || (userAnswer === 'paper' && computerAnswer === 'rock')
  

    if(isDraw){
        res = `It's draw. Computer answer was ${computerAnswer}!`
    }
    else if(isUserWin){
        res = `You win! Computer answer was ${computerAnswer}!`
    }
    else {
        res = `You Lose! Computer answer was ${computerAnswer}!`
    }

    return res
}

const result = startGame(userAnswer, computerAnswer)

alert(result)