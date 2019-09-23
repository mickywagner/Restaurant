import { pageLoad } from './home.js';
import { contactTab } from './contact.js';
import { menuTab } from './menu.js';
import { aboutTab } from './about.js';

pageLoad()

let contact = document.querySelector('#Contact')
contact.addEventListener('click', function() {
    console.log('contact')
    contactTab()
})

let home = document.querySelector('#Home')
home.addEventListener('click', function() {
    console.log('home')
    location.reload()

})

let about = document.querySelector('#About')
about.addEventListener('click', function() {
    console.log('about')
    aboutTab()
})

let menu = document.querySelector('#Menu')
menu.addEventListener('click', function() {
    console.log('menu')
    menuTab()
})
