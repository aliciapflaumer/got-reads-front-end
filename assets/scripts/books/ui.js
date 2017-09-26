'use strict'
const store = require('./../store')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createBookSuccess = (response) => {
  console.log('createBookSuccess ui reached!')
  resetForm($('#create-book'))
  $('#message').text('You have added a book!')
}

const createBookFailure = (response) => {
  $('#message').text('Adding a book failed. Try again.')
}

const getBookSuccess = (response) => {
  console.log('getBooksSuccess ui reached!')
  $('#message').text('You have got a book!')
}

const getBookFailure = (response) => {
  $('#message').text('Getting a book failed. Try again.')
}

module.exports = {
  resetForm,
  createBookSuccess,
  createBookFailure,
  getBookSuccess,
  getBookFailure
}
