function populateMenu(element, menu, array) {
  for (let i = 0; i < array.length; i += 1) {
    const menuItem = document.createElement('li');

    menuItem.textContent = array[i];

    if (array[i] === 'Fig Tree') {
      menuItem.setAttribute('id', 'logo');
    } else {
      menuItem.setAttribute('id', `${array[i]}`);
    }

    menu.appendChild(menuItem);
  }
  element.appendChild(menu);
}

export { populateMenu };