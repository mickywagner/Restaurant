import { populateMenu } from './populateMenu.js'

function pageLoad() {
    let content = document.querySelector("#content");
    let contentStyle = content.style.backgroundImage = "url('https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg')";
    
    let nav = document.createElement('nav');
    let section = document.createElement('section');
    let footer = document.createElement('footer');

    content.appendChild(nav);
    content.appendChild(section);
    content.appendChild(footer);

    let header = document.createElement('h1');
    let tag = document.createElement('p')
    let button = document.createElement('button')
    header.textContent = 'Welcome To Fig Tree';
    tag.textContent = 'Discover bold new flavors with our delicious & healthy foods'
    button.textContent = 'Book a Table'
    
    section.appendChild(header);
    section.appendChild(tag);
    section.appendChild(button);

    let navContent = ['Fig Tree', 'Home', 'About', 'Menu', 'Contact']
    let footContent = ['55 Main St, Nowhere 11111', '555-555-5555', 'Social Media']

    let navList = document.createElement('ul');
    let footList = document.createElement('ul')

    populateMenu(nav, navList, navContent);

    populateMenu(footer, footList, footContent);
}

export { pageLoad }


