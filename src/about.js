import { render } from './render.js'

function aboutTab() {
    let section = document.querySelector('section')
    section.textContent = ''

    let div = document.createElement('div')
    div.setAttribute("class", "about")

    let content = '<h1>About Us</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'

    render(content, div)

    section.appendChild(div)
}

export { aboutTab }


