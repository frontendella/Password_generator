const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-."
// let generatePsw = document.getElementById("generatePsw")

let clickCount = 0
function generateFirstPassword() {
    if (clickCount % 2 == 0) {
        firstPswClicked()
    } else {
        secondPswClicked()
    }
    clickCount++
}



const firstPswClicked = () => {
    let passwordOutputOne = document.getElementById("firstGenerated")

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 13; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    passwordOutputOne.textContent = result
}

const secondPswClicked = () => {
    let passwordOutputTwo = document.getElementById("secondGenerated")
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 13; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    passwordOutputTwo.textContent = result
}