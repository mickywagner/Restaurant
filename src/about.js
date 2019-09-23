function aboutTab() {
    let section = document.querySelector('section')
    section.textContent = ""

    let div = document.createElement('div')

    div.setAttribute("class", "about")

    section.appendChild(div)

    let para = document.createElement('p')
    let h1 = document.createElement('h1')
    h1.textContent = "About Us"

    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    div.appendChild(h1)
    div.appendChild(para)

}

export { aboutTab }