'use strict'

const config = require('../config')
const store = require('../store')

const createBook = function (data) {
  console.log(data)
  console.log('createBook api function reached!')
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

const getBooks = function () {
  console.log('getBooks api function reached!')
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

module.exports = {
  createBook,
  getBooks
}
