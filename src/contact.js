import { render } from './render.js';

function contactTab() {
    let section = document.querySelector('section')
    section.textContent = ""

    let contactDiv = document.createElement('div')
    contactDiv.setAttribute("class", "contact")
    let contactInfo = '<h3>Address:</h3><p>55 Main Street</br>Nowhere, NW 11111</p><h3>Phone:</h3><p>555-555-5555</p>'

    render(contactInfo, contactDiv)

    let formDiv = document.createElement('div')
    formDiv.setAttribute("class", "form")

    let form = document.createElement('form')
    let header = document.createElement('h3')
    header.textContent = "Send us a message!"
    let emailBar = document.createElement('input')
    emailBar.placeholder = 'Your e-mail'
    let message = document.createElement('textarea')
    message.placeholder = 'Your message!'
    let send = document.createElement('button')
    send.textContent = 'Send'

    form.appendChild(header)
    form.appendChild(emailBar)
    form.appendChild(message)
    form.appendChild(send)

    formDiv.appendChild(form)


    section.appendChild(contactDiv)
    section.appendChild(formDiv)
    

}

export { contactTab }

