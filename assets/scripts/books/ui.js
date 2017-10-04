'use strict'
const showBooksTemplate = require('../templates/book-list.handlebars')
// const store = require('./../store')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const createBookSuccess = (response) => {
  // console.log('createBookSuccess ui reached!')
  resetForm($('#create-book'))
  $('#message').text('You have added a book!')
  $('#get-all-books-container').show()
  $('#update-book').show()
}

const createBookFailure = (response) => {
  $('#message').text('Adding a book failed. Try again.')
}

const getBookSuccess = (data) => {
  // console.log('getBooksSuccess ui reached!')
  // console.log(data.books)
  // data.books returns an empty []
  // Linter expects ===, but works with ==
  if (data.books == '') {
    $('#message').text('You don\'t have any books. Try adding some.')
    $('#update-book').show()
  } else {
    const showBookList = showBooksTemplate({ books: data.books })
    $('#book-listing').empty()
    $('#book-listing').show()
    $('#book-listing').append(showBookList)
    $('#message').text('You have got books!')
  }
}

const getBookFailure = (response) => {
  $('#message').text('Oh, snap, getting some books failed. Try again.')
}

const onDeleteBookSuccess = (id) => {
  // console.log('onDeleteBookSuccess ui reached!')
  resetForm($('#delete-book'))
  $('#message').text('You have deleted a book!')
  $('#book-listing').empty(id)
}

const onDeleteBookFailure = (response) => {
  // console.log('onDeleteBookFailure ui reached!')
  $('#message').text('Oh snap, unable to delete a book! Did you type the ID number correctly? Try again.')
}

const onUpdateBookSuccess = (id) => {
  // console.log('onUpdateBookSuccess ui reached!')
  resetForm($('#update-book'))
  $('#message').text('You have updated a book\'s status!')
  $('#book-listing').empty(id)
}

const onUpdateBookFailure = (response) => {
  // console.log('onUpdateBookFail ui reached!')
  $('#message').text('Oh snap, unable to update a book\'s status! Try again.')
}

module.exports = {
  resetForm,
  createBookSuccess,
  createBookFailure,
  getBookSuccess,
  getBookFailure,
  onDeleteBookSuccess,
  onDeleteBookFailure,
  onUpdateBookSuccess,
  onUpdateBookFailure
}
