const copied = document.getElementById('copied')


function generatePsw() {
    const passwordEls = document.querySelectorAll('.password')
    let passwords = []
    for (let i = 0; i < passwordEls.length; i++) {
        const password = generatePassword()
        passwords.push(password)
    }
    for (let i = 0; i < passwords.length; i++) {
        passwordEls[i].textContent = passwords[i]
    }

    passwordEls.forEach(el => {
        el.addEventListener('click', copyPassword)
    })
}
function generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '1234567890'
    const logograms = '#$%&@^`~'
    const mathSymbols = '<*+!?='
    let characters = uppercase + lowercase + numbers + logograms + mathSymbols;
    characters = characters.split('')
    let password = '';
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}



