'use strict'
const showBooksTemplate = require('../templates/book-list.handlebars')
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
  $('#get-all-books-container').show()
  $('#show-books-button').show()
}

const createBookFailure = (response) => {
  $('#message').text('Adding a book failed. Try again.')
}

const getBookSuccess = (response) => {
  console.log('getBooksSuccess ui reached!')

  if (store.books === '') {
    $('#message').text('You don\'t have any books. Try adding some.')
  } else {
    $('#book-listing').show()
    const showBookList = showBooksTemplate({ books: store.books })
    $('#book-listing').append(showBookList)
    $('#message').text('You have got a book!')
    $('#show-books-button').hide()
  }
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
