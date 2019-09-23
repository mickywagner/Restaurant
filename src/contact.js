function contactTab() {
    let section = document.querySelector('section')

    let formDiv = document.createElement('div')
    formDiv.setAttribute("class", "form")
    

    section.textContent = 'Drop us a line'

    let form = document.createElement('form')
   
    let emailBar = document.createElement('input')
    emailBar.placeholder = 'Your e-mail'
    let message = document.createElement('textarea')
    message.placeholder = 'Enter your message!'
    let send = document.createElement('button')
    send.textContent = 'Send'

    form.appendChild(emailBar)
    form.appendChild(message)
    form.appendChild(send)

    formDiv.appendChild(form)
    section.appendChild(formDiv)

}

export { contactTab }