import { render } from './render.js'

function welcomeTab() {
    let section = document.querySelector('section')
    section.textContent = ''

    let sectionDiv = document.createElement('div')
    sectionDiv.setAttribute("class", "about")

    let welcome = '<h1>Welcome to Fig Tree</h1><p>Discover bold new flavors with our delicious & healthy foods made from wholesome, organic ingredients. Straight from the farm to your table.</p><button>Book A Table</button>'
    
    render(welcome, sectionDiv)
    
    section.appendChild(sectionDiv);

    section.appendChild(div)
}

export { welcomeTab }