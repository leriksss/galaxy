let btn = document.querySelector('.btn')
let age_input = document.querySelector('.age-input')
let message = document.querySelector('.message')

btn.addEventListener('click', function() {
    let age = +age_input.value
    if (age > 16) {
        message.innerHTML = 'Вік підходить!'
        message.style.color = 'green'
     }else {
        message.innerHTML = 'Треба бути старшим за 16 років :('
        message.style.color = 'red'
    }

})

