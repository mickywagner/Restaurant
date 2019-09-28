import { populateMenu } from './populateMenu.js'
import { render } from './render.js';

function pageLoad() {
    let content = document.querySelector("#content");
    let contentStyle = content.style.backgroundImage = "url('https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg')";
    
    let nav = document.createElement('nav');
    let section = document.createElement('section');
    let footer = document.createElement('footer');

    content.appendChild(nav);
    content.appendChild(section);
    content.appendChild(footer);

    let sectionDiv = document.createElement('div')
    sectionDiv.setAttribute("class", "about")

    let welcome = '<h1>Welcome to Fig Tree</h1><p>Discover bold new flavors with our delicious & healthy foods made from wholesome, organic ingredients. Straight from the farm to your table.</p><button>Book A Table</button>'
    
    render(welcome, sectionDiv)
    
    section.appendChild(sectionDiv);

    let navContent = ['Fig Tree', 'About', 'Menu', 'Contact']
    let footContent = ['55 Main St, Nowhere 11111', '555-555-5555', 'Social Media']

    let navList = document.createElement('ul');
    let footList = document.createElement('ul')

    populateMenu(nav, navList, navContent);

    populateMenu(footer, footList, footContent);
}

export { pageLoad }


