function randomNumber (number) {
    return Math.ceil(Math.random() * number)
}

let name = prompt('Hi! What is your name')

while (name == '' || name == null) {
    name = prompt('Hi! What is your name')
}

alert(`${name} I have stored numbers from 1 to 100. Try to guess. After each attempt, I will say "it's too little", "it's too much" or "you guessed it'`)

let number = randomNumber(100)
let guess = prompt('What number did I save?')
let numberOfGuess = 0

while (guess != number) {
    if (guess > number) {
        guess = prompt('A lot. Try again')
        numberOfGuess = numberOfGuess + 1
    }
    if (guess < number) {
        guess = prompt('It is little. Try again')
        numberOfGuess = numberOfGuess + 1
    }
}   

alert(`You guessed it wonderful! ${number}. You needed it ${numberOfGuess} attempt`)
