import { playIntro } from "./module_intro.js";

const presentation = document.querySelector('.presentation');
const keyboard = document.querySelector('.keyboard');

export const nameOfVisitor = [];

const init = () => {
    if (window.location.pathname === '/index.html' || '/') {

        const visitor = localStorage.getItem('visitor');
        const mode = localStorage.getItem('mode');
        if (visitor && (mode === 'skills')) { return reloadHome_skills() }
        if (visitor && (mode === 'personality')) { return reloadHome_personality() }
        keyboard.style.display = 'none';
        playIntro();

      }
}

export const reloadHome_skills = () => {
    const key = 'skills';
    localStorage.setItem('mode', key);

    window.location.href = "./page_skills.html";
}

export const reloadHome_personality = () => {
    const initLoad = document.querySelector('.init--load');
    const header = document.querySelector('header');
    const key = 'personality';
    localStorage.setItem('mode', key);

    initLoad.style.display = 'none';
    presentation.style.display = 'flex';
    header.style.display = 'flex';
}

init();