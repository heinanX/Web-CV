const blockB = document.querySelector('.blockB')
const listItems = document.querySelectorAll('.sidemenu > li')
listItems.forEach(element => {
    element.addEventListener('click', () => { printData(element)})
})

// declares an empty variable
let jsonData;

// function that fetches data from JSON and stores it in variable 'data'
const readJson = async () => {
    const response = await fetch ('../json_data/projects.json');
    jsonData = await response.json()
    loopItems(jsonData)
}

const printData = (element) => {
    const savedID = element.getAttribute('id')
    let projects;
    switch(savedID){
        case 'myProjects':
            projects = jsonData.filter((project) => project.collab == false)
            loopItems(projects);

        break;
        case 'collaborations':
            projects = jsonData.filter((project) => project.collab == true)
            loopItems(projects);
        break;
        case 'frontend':
            projects = jsonData.filter((project) => project.type == 'frontend')
            console.log(projects);
            loopItems(projects);
        break;
        case 'backend':
            projects = jsonData.filter((project) => project.type == 'backend')
            console.log(projects);
            loopItems(projects);
        break;
        default:
            loopItems(jsonData)
        
    }
}

const loopItems = (items) => {
    blockB.textContent = '';
    for (const item of items) {
        const div = document.createElement('div');
        div.setAttribute('class', 'center--adjust')
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        const a = document.createElement('a');
        a.setAttribute('onclick', `window.open(this.href,'_blank');return false;`)
        const p = document.createElement('p');

        a.setAttribute('href', item.link)
        a.textContent = item.title;
        p.textContent = item.description;

        h4.append(a)
        div.append(h4, p);
        blockB.append(div)
    }
}



readJson()