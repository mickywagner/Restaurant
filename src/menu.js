function menuTab() {
    let section = document.querySelector('section')
    section.textContent = ''
    
    let menuTitle = document.createElement('h1')
    menuTitle.textContent = "Fig Tree Menu"

    section.appendChild(menuTitle)
    
}

export { menuTab }

let menuObj = {
    Appetizers: ["Spinach Artichoke Zucchini Bites", "Loaded Greek Hummus", "Brussels Sprouts Sliders"],
    'Soups & Salads': ["Roasted Butternut Squash", "Spinach and White Bean", "Thai Curry Lentil"],
    Entrees: ["Buddha Bowl", "Pan-Seared Salmon with Kale and Apple Salad", "Orecchiette with Broccoli Rabe Pesto"],
    Desserts: ["Mango Tart", "Mochi Ice Cream", "Cookie Dough Cheesecake"], 
}


