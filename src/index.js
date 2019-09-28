import { pageLoad } from './home.js';
import { contactTab } from './contact.js';
import { menuTab } from './menu.js';
import { aboutTab } from './about.js';
import { welcomeTab } from './welcome.js'

pageLoad()

let contact = document.querySelector('#Contact')
contact.addEventListener('click', function() {
    contactTab()
})

let home = document.querySelector('#logo')
home.addEventListener('click', function() {
    welcomeTab()
})

let about = document.querySelector('#About')
about.addEventListener('click', function() {
    aboutTab()
})

let menu = document.querySelector('#Menu')
menu.addEventListener('click', function() {
    menuTab()
})
