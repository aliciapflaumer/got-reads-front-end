'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require(`../../../lib/get-form-fields`)

// book events

const onCreateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onCreateBook events function reached!')
  api.createBook(data)
    .then(ui.createBookSuccess)
    .catch(ui.createBookFailure)
}

const addHandlers = function () {
  $('#create-book').on('submit', onCreateBook)
  $('#get-books').on('submit', onGetAllBooks)
}

const onGetAllBooks = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onGetAllBooks events function reached!')
  api.getBooks(data)
    .then(ui.getBookSuccess)
    .catch(ui.getBookFailure)
}

module.exports = {
  addHandlers,
  onCreateBook,
  onGetAllBooks
}
