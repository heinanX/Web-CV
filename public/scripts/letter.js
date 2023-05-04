const translate = () => {
    const translateBtn = document.querySelector('.translate');
    translateBtn.removeEventListener('click', translate);
    translateBtn.addEventListener('click', renderLetter);

    const getVisitor = localStorage.getItem('visitor')
    const para1 = document.querySelector('#paragraph-1');
    const para2 = document.querySelector('#paragraph-2');
    const para3 = document.querySelector('#paragraph-3');
    const para4 = document.querySelector('#paragraph-4');

    para1.textContent = `Hej igen, ${getVisitor}!`
    para2.textContent = `Kul att du hittade hit. Eftersom jag redan har introducerat mig sj'lv skippar vi den biten.`
    para3.textContent = `I'm a!  Som studerande webbutvecklare har jag erfarenhet av både frontend och backend
    programmering, där vi främst fokuserat på Javascipt och node.js som backendspråk.
    Utöver det har jag förståelse för PHP och goda erfarenhet av HTML och CSS. Jag ställer
    alltid höga krav på mitt arbete och tar stor stolthet i det jag gör.`
    para4.textContent = `Som studerande webbutvecklare har jag erfarenhet av både frontend och backend
    programmering, där vi främst fokuserat på Javascipt och node.js som backendspråk.
    Utöver det har jag förståelse för PHP och goda erfarenhet av HTML och CSS. Jag ställer
    alltid höga krav på mitt arbete och tar stor stolthet i det jag gör.!`

}

const renderLetter = () => {
    const translateBtn = document.querySelector('.translate');
    translateBtn.removeEventListener('click', renderLetter);
    translateBtn.addEventListener('click', translate);
    translateBtn.textContent = 'English'

    const getVisitor = localStorage.getItem('visitor')
    const para1 = document.querySelector('#paragraph-1');
    const para2 = document.querySelector('#paragraph-2');
    const para3 = document.querySelector('#paragraph-3');
    const para4 = document.querySelector('#paragraph-4');
    const para5 = document.querySelector('#paragraph-5');
    const para6 = document.querySelector('#paragraph-6');

    para1.textContent = `Hi, ${getVisitor}!`
    
    para2.textContent = `Glad to see you found your way back here. Let me introduce myself more thoroughly this time. As you already know, the name is Linda and I'm a student of Medieinstitutet in Stockholm where I study Web Programming for eCommerce. This means I have experience with both Backend and Frontend programming.`

    para3.textContent = `In school, we have focused mainly on using Javascript since it's versatile as both a frontend and backend language (Node.js). We have dabbled with PHP and though my strength lies in Javascript, I feel confident using both since they are similar to each other.`
    
    para4.textContent = `As a student I've learned to build webpages from start to finish, though do not limit myself to ecommerce stores only. In between school assignments, I enjoy working on smaller projects and have even created my own Yahtzee. `

    para5.textContent = `What I like the most about programming is that it always challenges me to think. It is like its own little treasure hunt: a journey full of trials and (at times, so frustrating) errors. Though in the end, as each element is implemented, you get closer to the finish line where the end prize is the satisfaction of another completed project.`

    para6.textContent = `I put high expectations on all my work and take pride in what I deliver.`
}
renderLetter();

