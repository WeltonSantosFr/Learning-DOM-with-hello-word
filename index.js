const body = document.body

const text = document.createTextNode("Hello World!!!")

const mainTitle = document.createElement("h1")
mainTitle.appendChild(text)
console.log(mainTitle)

body.appendChild(mainTitle)