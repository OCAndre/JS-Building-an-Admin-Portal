// const { json } = require("body-parser")

// Your Code Here
const main = async () => {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json();
    books.forEach(updateBookNumber);
}


const updateBookNumber = (book) => {
    let root = document.querySelector('#root')

    let bookLi = document.createElement('li')
    bookLi.textContent = book.title + ': '

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    bookLi.append(quantityInput, saveButton)

    root.append(bookLi)
}

main();