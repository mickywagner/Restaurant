import { pageLoad } from './home';
import { contactTab } from './contact';
import { menuTab } from './menu';
import { aboutTab } from './about';
import { welcomeTab } from './welcome';
import './style.css';

pageLoad();

const contact = document.querySelector('#Contact');
contact.addEventListener('click', () => {
  contactTab();
});

const home = document.querySelector('#logo');
home.addEventListener('click', () => {
  welcomeTab();
});

const about = document.querySelector('#About');
about.addEventListener('click', () => {
  aboutTab();
});

const menu = document.querySelector('#Menu');
menu.addEventListener('click', () => {
  menuTab();
});
