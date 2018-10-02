# MyReads Project

This is an assessment project for Udacity's React Fundamentals course which is part of the FEND course. The goal of this project was to add interactivity to the app by refactoring the static code in the template.

[Create React App](https://github.com/facebookincubator/create-react-app) is used to bootstrap the project.

## Application Details

The application allows the user to search for books and add them to shelves which are displayed on the main page. There are three shelves available:

* Currently Reading

* Want to read

* Read

User can add more books by pressing the '+' button on the main page which takes them to the search page. The search engine is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md).

The books can be moved between shelves.

To see more detail about the book, the book image on main page or search page can be clicked. This will take user to a book detail page which contains the book subtitle, description, publisher etc.

## Installation

* install all project dependencies with `npm install`

## Launching

* start the development server with `npm start`

The application will launch in a browser window.

## Backend Server

A backend server was available from the starter project to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains following methods that are used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## To Do

* Store scroll position in order to auto-scroll back to where user has been previously when returning from the book detail page.

## Dependencies

[React Stars](https://www.npmjs.com/package/react-stars)

[React Router](https://github.com/ReactTraining/react-router)

## Contributing

This repository is my project code for the Udacity FEND course. Therefore, I most likely will not accept pull requests.
