import { playIntro } from "./module_intro.js"

export const board = document.querySelector('.board')
const headerName = document.querySelector('.headerName')
const presentation = document.querySelector('.presentation')
export const nameOfVisitor = []

headerName.addEventListener('click', bye)

const init = () => {
    if (window.location.pathname === '/public/index.html') {

        const visitor = localStorage.getItem('visitor')
        const mode = localStorage.getItem('mode')
        if (visitor && (mode === 'skills')) { return reloadHome_skills() }
        if (visitor && (mode === 'personality')) { return reloadHome_personality() }
        playIntro()

      }
}

export const reloadHome_skills = () => {
    const initLoad = document.querySelector('.init--load')
    const header = document.querySelector('header')
    const key = skills;
    localStorage.setItem('mode', key)

    initLoad.style.display = 'none'
    board.style.display = 'flex'
    header.style.display = 'flex'
}

export const reloadHome_personality = () => {
    const initLoad = document.querySelector('.init--load')
    const header = document.querySelector('header')
    const key = 'personality';
    localStorage.setItem('mode', key)

    initLoad.style.display = 'none';
    presentation.style.display = 'flex';
    header.style.display = 'flex';
    board.style.display = 'none';
}

init();

function bye() {
    localStorage.removeItem('visitor')
}