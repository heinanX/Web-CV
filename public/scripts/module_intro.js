import { reloadHome, nameOfVisitor, board } from './script.js'

export const playIntro = () => {

    const header = document.querySelector('header')
    header.style.display = 'none'
    board.style.display = 'none'
    const text = document.querySelector('.hello')
    let greet = "... ";

    // Set up a timer to display the text
    let index = 0;
    const timerId = setInterval(function() {
    // Append the next character to the text element
    text.textContent += greet[index];

    // If we've reached the end of the text, stop the timer
    if (index === greet.length - 1) {
        clearInterval(timerId);
        setTimeout(() => {
            cueWelcome(text)
        }, 100);
    }
    // Increment the index
    index++;
    }, 250);

}

const cueWelcome = (text) => {
    let greet = "Hello and welcome to my portfolio!";

    // Set up a timer to display the text
    let index = 0;
    const timerId = setInterval(function() {
    // Append the next character to the text element
    text.textContent += greet[index];

    // If we've reached the end of the text, stop the timer
    if (index === greet.length - 1) {
        clearInterval(timerId);
        cueName()
    }

    // Increment the index
    index++;
    }, 100);
}

const cueName = () => {
    const screen = document.querySelector('.screen')
    const row2 = document.createElement('p')
    row2.setAttribute('id', 'hello--row--2')
    screen.appendChild(row2)

    const hello = document.querySelector('.hello')
    hello.style.color = 'gray';
    const greet = "May I ask, what's your name?";
    let index = 0;

    const timerId = setInterval(() => {

    row2.textContent += greet[index];

    if (index === greet.length - 1) {
        clearInterval(timerId);

        setTimeout(() => {
            const screen = document.querySelector('.screen')
            const input = document.createElement('input')
            input.setAttribute('class', 'enter--name')
            screen.appendChild(input)
            input.focus()

            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    nameOfVisitor.push(input.value)
                    cueGreeting()
                }
            })

            const btn = document.createElement('button')
            btn.setAttribute('class', 'btn btn-secondary btn--absolute')
            btn.setAttribute('id', 'keyboardBtn')
            btn.addEventListener('click', () => { showKeyboard() })
            btn.innerText = 'Need a Keyboard?'

            document.body.appendChild(btn)
            
        }, 500)
    }

    index++;
    }, 100);

}

const showKeyboard = () => {
    const btn = document.querySelector('#keyboardBtn')
    btn.style.display = 'none'

    const keyboard = document.querySelector('.keyboard')
    keyboard.style.display = 'flex'
    buttonify()
}


const buttonify = () => {

    const text = document.querySelectorAll('.key')
    const input = document.querySelector('.enter--name')
    text.forEach(element => {
        element.addEventListener('click', () => {

            if (!(element.textContent == 'ENTER')) {
                console.log(element.textContent)
                let letter = element.textContent
                return input.value += letter

            }
            nameOfVisitor.push(input.value)
            cueGreeting()
            
        })
        
    })
}

const cueGreeting = () => {

    const row2 = document.querySelector('#hello--row--2')
    const input = document.querySelector('.enter--name')
    const btn = document.querySelector('#keyboardBtn')
    const keyboard = document.querySelector('.keyboard')
    btn.style.display = 'none';
    input.style.display = 'none';
    keyboard.style.display = 'none';
    row2.style.color = 'gray';

    const screen = document.querySelector('.screen')
    const text = document.createElement('p')
    text.setAttribute('id', 'hello--row--3')
    screen.appendChild(text)
    let greet = `Nice to make your acquaintance, ${nameOfVisitor[0]}!`;


    let index = 0;
    const timerId = setInterval(function() {

        text.textContent += greet[index];

        if (index === greet.length - 1) {
            clearInterval(timerId)
            cueIntroduction();
        }

        index++;
    }, 100);

}

const cueIntroduction = () => {
    const row3 = document.querySelector('#hello--row--3')
    row3.style.color = 'gray';
    const screen = document.querySelector('.screen')
    const text = document.createElement('p')
    text.setAttribute('id', 'hello--row--4')
    screen.appendChild(text)

    let greet = "As you may or may not know, my name is Linda and I'm a web developer still in development. Pun intended ;)";

    // Set up a timer to display the text
    let index = 0;
    const timerId = setInterval(function() {
    // Append the next character to the text element
    text.innerHTML += greet[index];

    // If we've reached the end of the text, stop the timer
    if (index === greet.length - 1) {
        clearInterval(timerId);

        localStorage.setItem('visitor', nameOfVisitor[0])
        makeChoice()
    }

    index++;
    }, 100);
}

const makeChoice = () => {
    const row4 = document.querySelector('#hello--row--4')
    row4.style.color = 'gray';

    const screen = document.querySelector('.screen')
    const text = document.createElement('p')
    text.setAttribute('id', 'hello--row--5')
    screen.appendChild(text)

    let greet = "Now, here's a last question... I swear.";

    // Set up a timer to display the text
    let index = 0;
    const timerId = setInterval(function() {
    // Append the next character to the text element
    text.innerHTML += greet[index];

    // If we've reached the end of the text, stop the timer
    if (index === greet.length - 1) {
        clearInterval(timerId);
        setTimeout(() => {
            const choice = document.createElement('p')
            const greet = "What's most important to you?";
            choice.innerText = greet
            screen.appendChild(choice)
            text.style.color = 'gray';
            makeChoiceBtns(screen)

        }, 200)
    }

    // Increment the index
    index++;
    }, 100);
}

const makeChoiceBtns = (screen) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'makeChoiceBtn--div')
    const span = document.createElement('span')
    const personalityBtn = document.createElement('button')
    const skillsBtn = document.createElement('button')
    personalityBtn.setAttribute('class', 'btn btn-secondary')
    skillsBtn.setAttribute('class', 'btn btn-secondary')
    span.innerText = ' or '

    personalityBtn.innerText = 'Personality'
    skillsBtn.innerText = 'Skills'

    div.append(personalityBtn, span, skillsBtn)
    screen.appendChild(div)

    skillsBtn.addEventListener('click', reloadHome)
}
    /* reloadHome() */
/* let greet = "Please wait while I get things ready..."; */