const board = document.querySelector('.board')
const nameOfVisitor = []

const init = () => {
    const visitor = localStorage.getItem('visitor')
    if (visitor) { return reloadHome() }
    wake()
}

/* 

const setKey = () => {
    console.log('hej')
}
 */
const reloadHome = () => {
    const initLoad = document.querySelector('.init--load')
    const header = document.querySelector('header')
    initLoad.style.display = 'none'
    board.style.display = 'flex'
    header.style.display = 'flex'
}

const wake = () => {
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
        
    }
    // Increment the index
    index++;
    }, 250);

    setTimeout(function() {
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
    
    }, 1000)
}
init()

    const cueName = () => {
        const intro2 = document.querySelector('.intro2')

        const greet = "May I ask, what's your name?";
    
        // Set up a timer to display the text
        let index = 0;
        const timerId = setInterval(() => {
        // Append the next character to the text element
        intro2.textContent += greet[index];
    
        // If we've reached the end of the text, stop the timer
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
                        queNext()
                    }
                })

                const btn = document.createElement('button')
                btn.setAttribute('class', 'btn btn-secondary')
                btn.setAttribute('id', 'keyboardBtn')
                btn.addEventListener('click', () => { showKeyboard() })
                btn.innerText = 'Need a Keyboard?'

                document.body.appendChild(btn)
                
            }, 500)
        }
    
        // Increment the index
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
            queNext()
            
        })
        
    })
}

const queNext = () => {
    const screen = document.querySelector('.screen')
    const text = document.createElement('p')
    screen.appendChild(text)
    let greet = `Nice to make your acquaintance, ${nameOfVisitor[0]}!`;

    // Set up a timer to display the text
    let index = 0;
    const timerId = setInterval(function() {
    // Append the next character to the text element
    text.textContent += greet[index];

    // If we've reached the end of the text, stop the timer
    if (index === greet.length - 1) {
        clearInterval(timerId)
        loadCV();
    }
    // Increment the index
    index++;
    }, 150);
}

const loadCV = () => {
        const screen = document.querySelector('.screen')
        const text = document.createElement('p')
        screen.appendChild(text)

        let greet = "Please wait as I get things ready...";
        let greest = "As you may or may not know, my name is Linda and I'm a web developer still in development";

        // Set up a timer to display the text
        let index = 0;
        const timerId = setInterval(function() {
        // Append the next character to the text element
        text.textContent += greet[index];
    
        // If we've reached the end of the text, stop the timer
        if (index === greet.length - 1) {
            clearInterval(timerId);
            localStorage.setItem('visitor', nameOfVisitor[0])
            setTimeout(function() {
                reloadHome()
            }, 2000)
        }
    
        // Increment the index
        index++;
        }, 150);
}

