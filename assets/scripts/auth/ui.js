'use strict'

const store = require('../store')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
    .removeAttr('checked').removeAttr('selected')
}

const signUpSuccess = function (data) {
  // console.log(data)
  console.log('Successfully signed up')
  $('#message').text('Successfully signed up')
  $('#sign-up').show()
  resetForm($('#sign-up'))
  // console.log('Is the form empty now?')
}

const signUpFailure = function (data) {
  // console.log(data)
  $('#message').text('Error on sign up. You may already be signed in.')
  $('#sign-up').show()
  resetForm($('#sign-up'))
}

const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Arrived at Sign in success!')
  $('#message').text('Successfully signed in')
  $('#update-book').show()
  store.user = data.user
  // console.log('store.user console log data is ' + data.user)
  resetForm($('#sign-in'))
  // console.log('Is the form empty now?')
  resetForm($('#update-book'))
}

const signInFailure = function (data) {
  // console.log(data)
  $('#message').text('Error on sign in. Did you enter your email and password correct?')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#get-books').hide()
  $('#create-book').hide()
  $('#update-book').hide()
  $('#delete-book').hide()
  resetForm($('#sign-in'))
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('#message').text('Successfully changed password!')
  resetForm($('#change-password'))
}

const changePasswordFailure = function (data) {
  // console.log(error)
  $('#message').text('Error on change password!')
  resetForm($('#sign-up'))
}

const signOutSuccess = function () {
  // console.log('Successfully signed out')
  $('#message').text('Successfully signed out!')
  store.user = null // empty store
  $('#book-listing').hide()
}

const signOutFailure = function (data) {
  // console.log(data)
  $('#message').text('Error on sign out!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
