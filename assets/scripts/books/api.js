'use strict'

const config = require('../config')
const store = require('../store')

const createBook = (data) => {
  // console.log(data)
  // console.log('createBook api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/books/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
    .then((response) => {
      store.book = response.book
    })
}

const getBooks = () => {
  // console.log('getBooks api function reached!')
  return $.ajax({
    url: config.apiOrigin + '/books/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
    .then((response) => {
      store.books = response.books
      return store
})
}

const deleteBook = (id) => {
  console.log('deleteBook api function reached!')
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/books/' + id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBook,
  getBooks,
  deleteBook
}
