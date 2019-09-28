import { render } from './render.js'

function menuTab() {
    let section = document.querySelector('section')
    section.textContent = ''

    let content = document.createElement('div')

    let menuTitle = document.createElement('h1')
    menuTitle.textContent = 'Fig Tree Menu'

    let menuDiv = document.createElement('div')
    menuDiv.setAttribute('class', 'menu')
    
    section.appendChild(menuTitle)
    section.appendChild(menuDiv)
    let menuSection = '<h3>Appetizers</h3><p>Spinach Artichoke Zucchini Bites</p><p>Loaded Greek Hummus</p><p>Brussels Sprouts Sliders</p><h3>Soups & Salads</h3><p>Roasted Butternut Squash</p><p>Spinach and White Bean</p><p>Thai Curry Lentil"</p><h3>Entrees</h3><p>Buddha Bowl</p><p>Pan-Seared Salmon with Kale and Apple Salad</p><p>Orecchiette with Broccoli Rabe Pesto</p><h3>Desserts</h3><p>Mango Tart</p><p>Mochi Ice Cream</p><p>Cookie Dough Cheesecake</p>'

    render(menuSection, menuDiv)

    
    content.appendChild(menuTitle)
    content.appendChild(menuDiv)

    section.appendChild(content)

}

export { menuTab }

let menuObj = {
    Appetizers: ["Spinach Artichoke Zucchini Bites", "Loaded Greek Hummus", "Brussels Sprouts Sliders"],
    'Soups & Salads': ["Roasted Butternut Squash", "Spinach and White Bean", "Thai Curry Lentil"],
    Entrees: ["Buddha Bowl", "Pan-Seared Salmon with Kale and Apple Salad", "Orecchiette with Broccoli Rabe Pesto"],
    Desserts: ["Mango Tart", "Mochi Ice Cream", "Cookie Dough Cheesecake"], 
}





