import { populateMenu } from './populateMenu';
import { render } from './render';

function pageLoad() {
  const content = document.querySelector('#content');
  const contentStyle = content.style.backgroundImage = "url('https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg')";

  const nav = document.createElement('nav');
  const section = document.createElement('section');
  const footer = document.createElement('footer');

  content.appendChild(nav);
  content.appendChild(section);
  content.appendChild(footer);

  const sectionDiv = document.createElement('div');
  sectionDiv.setAttribute('class', 'about');

  const welcome = '<h1>Welcome to Fig Tree</h1><p>Discover bold new flavors with our delicious & healthy foods made from wholesome, organic ingredients. Straight from the farm to your table.</p><button>Book A Table</button>';

  render(welcome, sectionDiv);

  section.appendChild(sectionDiv);

  const navContent = ['Fig Tree', 'About', 'Menu', 'Contact'];
  const footContent = ['55 Main St, Nowhere 11111', '555-555-5555', 'Social Media'];

  const navList = document.createElement('ul');
  const footList = document.createElement('ul');

  populateMenu(nav, navList, navContent);

  populateMenu(footer, footList, footContent);
}

export { pageLoad };
