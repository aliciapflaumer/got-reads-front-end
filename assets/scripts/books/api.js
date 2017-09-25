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

module.exports = {
  createBook
}
