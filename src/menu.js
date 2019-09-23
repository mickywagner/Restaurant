function menuTab() {
    let section = document.querySelector('section')
    section.textContent = ''
    
    let menuTitle = document.createElement('h1')
    menuTitle.textContent = "Fig Tree Menu"

    section.appendChild(menuTitle)
    
}

export { menuTab }

let menuItems = ['Açai Bowl', 'Chia Pudding', 'Jackfruit Tacos']