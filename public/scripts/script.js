import { playIntro } from "./module_intro.js"

export const board = document.querySelector('.board')
const headerName = document.querySelector('.headerName')
export const nameOfVisitor = []

headerName.addEventListener('click', bye)

const init = () => {
    const visitor = localStorage.getItem('visitor')
    if (visitor) { return reloadHome() }
    playIntro()
}

export const reloadHome = () => {
    const initLoad = document.querySelector('.init--load')
    const header = document.querySelector('header')
    initLoad.style.display = 'none'
    board.style.display = 'flex'
    header.style.display = 'flex'
}

init();

function bye() {
    localStorage.removeItem('visitor')
}