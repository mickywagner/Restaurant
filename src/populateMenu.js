function populateMenu(element, menu, array) {
    for(let i = 0; i < array.length; i++) {
        let menuItem = document.createElement('li')

        menuItem.textContent = array[i]
        menu.appendChild(menuItem);

        if(array[i] == 'Fig Tree') {
            menuItem.setAttribute("id", "logo")
        }
    }
    element.appendChild(menu)
}

export { populateMenu }