'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require(`../../../lib/get-form-fields`)

// book events

const onCreateBook = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onCreateBook events function reached!')
  api.createBook(data)
    .then(ui.createBookSuccess)
    .catch(ui.createBookFailure)
}

const onGetAllBooks = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  console.log('onGetAllBooks events function reached!')
  api.getBooks()
    .then(ui.getBookSuccess)
    .catch(ui.getBookFailure)
}

const onDeleteBook = (event) => {
  event.preventDefault()
  console.log('onDeleteBook events function reached!')
  const id = getFormFields(event.target)
  api.deleteBook(id.book.id)
    .then(ui.onDeleteBookSuccess)
    .catch(ui.onDeleteBookFailure)
}

const addHandlers = () => {
  $('#create-book').on('submit', onCreateBook)
  $('#get-books').on('submit', onGetAllBooks)
  $('#delete-book').on('submit', onDeleteBook)
}

module.exports = {
  addHandlers,
  onCreateBook,
  onGetAllBooks,
  onDeleteBook
}
