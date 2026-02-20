const emailButton = document.getElementById('email-button')
const emailText = document.getElementById('email-text')

const whatsappButton = document.getElementById('whatsapp-button')
const whatsappText = document.getElementById('whatsapp-text')

if (emailButton && emailText) {
    emailButton.addEventListener('click', function (event) {
      event.preventDefault()
      emailText.textContent = 'felipe.mas.dev@gmail.com'
  })
}

if (whatsappButton && whatsappText) {
    whatsappButton.addEventListener('click', function (event) {
      event.preventDefault()
      whatsappText.textContent = '55 13 99165-5079'
  })
}
