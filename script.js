const name = document.querySelector('#name')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btnClaim = document.querySelector('.claim')

const showError = (input,msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.errortext')

    formBox.classList.add('error')
    errorMsg.textContent = input.placeholder + msg
}

const clearError = input => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.errortext')

    formBox.classList.remove('error')
    errorMsg.textContent = ''
}

const checkEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(email.value)){
        clearError(email)
    }
    else {
        showError(email,' is not an email')
    }
}


const checkForm = input => {
input.forEach(el => {
    if (el.value === ''){
        showError(el, ' cannot be empty')
    }
    else {
        clearError(el)
    }
})
}

btnClaim.addEventListener('click', e => {
    e.preventDefault()

    checkForm([name, lastName, email, password])
    checkEmail(email)
})