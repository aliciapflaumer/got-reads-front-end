## GotReads

GotReads, is a book tracking app that users can keep track of books they want to read, currently reading, and have read.

## Link to live, deployed GotReads app

[GotReads deployed app](https://aliciapflaumer.github.io/got-reads-front-end/)

## Link to Front and Back End repositories

[GotReads Front End](https://github.com/aliciapflaumer/got-reads-front-end)

[GotReads Back End](https://github.com/aliciapflaumer/gotReads-backend)

## The GotReads Front End (Client)

The front end is written in html, css, javascript,handlebars and bootstrap.

## The GotReads Back End (Server)

The back end is a Rails application supporting 4 RESTful routes for handling GET, POST, PATCH, and DELETE requests.

## Databases and Tables

The app uses two tables, one for users and one for books.

The `user` has an id, email, and stores a token, password, and timestamps for when
a user record was created and updated.

`books` has a title, author, status, and timestamps for when a book record was created and updated.

## Entity Relationship Diagram

Users ----|----< Books

A user has many Books.

## Approach to building GotReads

I approached building GotReads differently than the Tic-Tac-Toe game. I felt more comfortable with the code and had a clearer focus. I first started with a big plan with my sketches which quickly dwindled down to just the bare minimum, I developed a checkist, and a chart depicting the steps to take through the process.

## Issues I encountered

- I had an issue with deployment. I had missed a couple of steps in the heroku setup
guide. Solved.

- I had an issue with getting a 400 PATCH error in the web ui. Solved.

- I had an issue with naming and order in my handlebars template and the
html file. Solved.

- Some issues that I encountered, I solved on my own just by writing out the issue.

- The consultants were helpful to my process.

## User stories

- As a user, I want to create a new book selection to share what I want to read.

- As a user, I want to update a book selection to share what book I am currently reading.

- As a user, I want to get all of my books in my library.

- As a user, I want to recommend books that I've read.

- As a user, I want to delete a book.

## Wireframes

![ERD](https://i.imgur.com/Dg2aETG.jpg)

![Tables](https://i.imgur.com/2Zja4j1.jpg?1)
