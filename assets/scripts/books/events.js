'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require(`../../../lib/get-form-fields`)

// book events

const onCreateBook = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('onCreateBook function worked!')
  api.createBook(data)
    .then(ui.createBookSuccess)
    .catch(ui.createBookFailure)
}

const addHandlers = function () {
  $('#createBook').on('submit', onCreateBook)
}

module.exports = {
  addHandlers,
  onCreateBook
}
