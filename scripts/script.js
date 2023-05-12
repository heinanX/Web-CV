import { playIntro } from "./module_intro.js"

const presentation = document.querySelector('.presentation')
const headerName = document.querySelector('.headerName')
headerName.addEventListener('click', () => { clear_LS() } )

export const nameOfVisitor = []

const init = () => {
    if (window.location.pathname === '/index.html') {

        const visitor = localStorage.getItem('visitor')
        const mode = localStorage.getItem('mode')
        if (visitor && (mode === 'skills')) { return reloadHome_skills() }
        if (visitor && (mode === 'personality')) { return reloadHome_personality() }
        playIntro()

      }
}

export const reloadHome_skills = () => {
    const key = 'skills';
    localStorage.setItem('mode', key)

    window.location.href = "./page_qualifications.html"
}

export const reloadHome_personality = () => {
    const initLoad = document.querySelector('.init--load')
    const header = document.querySelector('header')
    const key = 'personality';
    localStorage.setItem('mode', key)

    initLoad.style.display = 'none';
    presentation.style.display = 'flex';
    header.style.display = 'flex';
}

const clear_LS = () => {
    console.log('hello');

    localStorage.removeItem('visitor');
    localStorage.removeItem('mode')
}

init();